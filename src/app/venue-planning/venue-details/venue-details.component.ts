import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

import { FooterNavigationService } from '../../helper/footer-navigation.service';
import { RouteConfigService } from '../../helper/route-config.service';
import { NavigateRouteService } from '../../helper/navigate.service';
import { FieldConfig } from 'src/app/models/FieldConfig';
import { ResetLayoutService } from 'src/app/helper/reset-layout-element';
import { SideMenuListService } from 'src/app/service/sidemenu.service';

@Component({
  selector: 'venue-details',
  templateUrl: './venue-details.component.html',
  styleUrls: ['./venue-details.component.css']
})
export class VenueDetailsComponent implements OnInit, OnDestroy {
  public venueDetailsForm: FormGroup;
  public customerDetails: any[];
  public isVenueExist: boolean;
  public isDuplicate: boolean;
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

  constructor(private fb: FormBuilder, private fns: FooterNavigationService, private rls: ResetLayoutService, private rs: RouteConfigService, private nrs: NavigateRouteService, private location: Location, private sms: SideMenuListService) {
    rls.init();

    let path = location.path().split("/");
    const active_path = path[path.length - 1];
    this.route_config = rs.getConfig(active_path);
    if (this.route_config) {
      fns.setNextBtnLabel = this.route_config.nextBtnLabel;
      fns.setPrevBtnLabel = this.route_config.prevBtnLabel;
    }

    this.subscription1$ = fns.getNextBtnStatus.subscribe((event) => {
      if (event) {
        this.submit(event);
      }
    });

    this.subscription2$ = fns.getPrevBtnStatus.subscribe((event) => {
      if (event) {
        this.nrs.navigate(this.route_config.prevRoutePath);
      }
    });
  
    this.subscriptions.push(this.subscription1$);
    this.subscriptions.push(this.subscription2$);

    this.customerDetails = [
      {
        sessionId: "",
        cusotmerName: "AT&T",
        venuescount: "20",
        venues: [
          {
            venuename: "wqew",
            venueaddress: "qwoieoqw",
            configurationStatus: "true/false"
          },
          {
            venuename: "wqew",
            venueaddress: "qwoieoqw",
            configurationStatus: "true/false"
          }
        ]
      }
    ];

    this.fileType = ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
    this.importedFile = "Imported File";
    this.sampleFileName = "Sample File";
    this.supportedFiles = " .xls / .xlsx/ .xlsm";

    this.importConfig = [
      {
        label: 'Choose the file with iBWave design',
        name: 'ibwave',
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
    ]

  }

  ngOnInit(): void {
    this.venueDetailsForm = this.fb.group({
      customerName: ['', Validators.required],
      venueName: ['', Validators.required]
    });

    this.fns.setNextBtnVisibleStatus = true;
  }

  get formControls() { return this.venueDetailsForm.controls; }
  get customersList() { return this.customerDetails; }

  validateVenueName(customer) {

    this.customerDetails.filter(e => {
      e.venues.filter(s => {
        if (e.cusotmerName == customer) {
          this.isVenueExist = false;
          if (s.venuename === this.venueDetailsForm.value.venueName) {
            this.isVenueExist = true;
            return true;
          }
        }
      })
    });

  }

  isValidForm() {

    if (this.venueDetailsForm.valid) {
      if (this.isVenueExist) {
        this.isDuplicate = true;
        this.fns.setNextBtnVisibleStatus = true;
      } else {
        this.isDuplicate = false;
        // this.fns.setNextBtnVisibleStatus = false;
      }

    } else {
      this.fns.setNextBtnVisibleStatus = true;
    }
  }

  submit(event) {
    if (this.venueDetailsForm.valid) {
     
    }
  }

  importFile($event) {
    this.fns.setNextBtnVisibleStatus = false;   
    this.sms.updateSubMenuList(2);
    this.nrs.navigate(this.route_config.nextRoutePath);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }
}
