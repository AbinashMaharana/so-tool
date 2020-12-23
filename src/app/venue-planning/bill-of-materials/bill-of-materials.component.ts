import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { FooterNavigationService } from "src/app/helper/footer-navigation.service";
import { NavigateRouteService } from "src/app/helper/navigate.service";
import { ResetLayoutService } from "src/app/helper/reset-layout-element";
import { RouteConfigService } from "src/app/helper/route-config.service";
import { FieldConfig } from "src/app/models/FieldConfig";

@Component({
  selector: "app-bill-of-materials",
  templateUrl: "./bill-of-materials.component.html",
  styleUrls: ["./bill-of-materials.component.css"]
})
export class BillOfMaterialsComponent implements OnInit {
  public route_config;
  fileType: any;
  importedFile: string;
  sampleFileName: string;
  supportedFiles: string;
  form: FormGroup = new FormGroup({});
  config: FieldConfig[];

  constructor(private rls: ResetLayoutService, private fns: FooterNavigationService, private rs: RouteConfigService, private nrs: NavigateRouteService, private route: ActivatedRoute) {
    rls.initWithVenueDetails();
    const active_path = route.snapshot.routeConfig.path;
    this.route_config = rs.getConfig(active_path);
    fns.setNextBtnLabel = this.route_config.nextBtnLabel;
    fns.setPrevBtnLabel = this.route_config.prevBtnLabel;

    fns.getNextBtnStatus.subscribe(event => {
      if (event) {
        this.nrs.navigate(this.route_config.nextRoutePath);
      }
    });

    fns.getPrevBtnStatus.subscribe(event => {
      if (event) {
        this.nrs.navigate(this.route_config.prevRoutePath);
      }
    });





    this.fileType = ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
    this.importedFile = "Imported File";
    this.sampleFileName = "Sample File";
    this.supportedFiles = " .xls / .xlsx/ .xlsm";

    this.config = [
      {
        label: 'Choose the file with Bill of Materials (BOM)',
        name: 'ciq',
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
      }
    ]
  }

  ngOnInit(): void {

  }
  importFile($event) {
    console.log("Herer");
    this.fns.setNextBtnVisibleStatus = false;
  }
}
