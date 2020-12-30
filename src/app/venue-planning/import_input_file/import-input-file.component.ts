import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

import { FooterNavigationService } from 'src/app/helper/footer-navigation.service';
import { NavigateRouteService } from 'src/app/helper/navigate.service';
import { ResetLayoutService } from 'src/app/helper/reset-layout-element';
import { RouteConfigService } from 'src/app/helper/route-config.service';
import { FieldConfig } from 'src/app/models/FieldConfig';
import { SideMenuListService } from 'src/app/service/sidemenu.service';

@Component({
  selector: 'import-input-file',
  templateUrl: './import-input-file.component.html',
  styleUrls: ['./import-input-file.component.css']
})
export class ImportInputFilesComponent implements OnInit, OnDestroy {
  public route_config;
  fileType: any;
  importedFile: string;
  sampleFileName: string;
  supportedFiles: string;
  form: FormGroup = new FormGroup({});
  importConfig: FieldConfig[];
  subscription1$: Subscription;
  subscription2$: Subscription;
  subscriptions: Subscription[] = [];

  constructor(private rls: ResetLayoutService, private fns: FooterNavigationService, private rs: RouteConfigService, private nrs: NavigateRouteService, private location: Location, private sms: SideMenuListService) {
    rls.initWithVenueDetails();

    let path = location.path().split("/");
    const active_path = path[path.length - 1];
    this.route_config = rs.getConfig(active_path);
    if (this.route_config) {
      fns.setNextBtnLabel = this.route_config.nextBtnLabel;
      fns.setPrevBtnLabel = this.route_config.prevBtnLabel;
    }

    this.subscription1$ = fns.getNextBtnStatus.subscribe(event => {
      if (event) {

        this.nrs.navigate(this.route_config.nextRoutePath);
      }
    });
    this.subscription2$ = fns.getPrevBtnStatus.subscribe(event => {
      if (event) {
        this.nrs.navigate(this.route_config.prevRoutePath);
      }

    });

    this.subscriptions.push(this.subscription1$, this.subscription2$);
    
    this.fileType = ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
    this.importedFile = "Imported File";
    this.sampleFileName = "Sample File";
    this.supportedFiles = " .xls / .xlsx/ .xlsm";
    this.importConfig = [
      {
        label: 'Choose the file with Bill Of Materials(BOM)',
        name: 'bom',
        fileName: 'Choose File',
        tooltipInfo: 'Download sample files(s) to know content format',
        required: true,
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: ''
          }
        ]
      },
      {
        label: 'Choose the file with Customer Information Questionnarie(CIQ)',
        name: 'ciq',
        fileName: 'Choose File',
        tooltipInfo: 'Download sample file to know content format. Please ensure the file being imported has configurations required for all gNodeBs and Edge Cloud device for this site',
        required: true,
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: ''
          }
        ]
      },
      {
        label: 'Choose the file with all Radio Units and its DU mapping',
        name: 'radioGnodebMap',
        fileName: 'Choose File',
        tooltipInfo: 'Download sample file to know content format. Please ensure the file being imported has configurations required for all Radio Units (count should match with what has been imported in BOM) for this site',
        required: true,
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: ''
          }
        ]
      }
    ]
  }

  ngOnInit(): void {
  }

  importFiles($event) {
    this.fns.setNextBtnVisibleStatus = false;
    this.sms.updateSubMenuList(3);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }
}
