import { OnDestroy, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FooterNavigationService } from 'src/app/helper/footer-navigation.service';
import { NavigateRouteService } from 'src/app/helper/navigate.service';
import { ResetLayoutService } from 'src/app/helper/reset-layout-element';
import { RouteConfigService } from 'src/app/helper/route-config.service';
import { FieldAttrConfig } from 'src/app/models/FieldConfig';

@Component({
  selector: 'app-du-config',
  templateUrl: './du-config.component.html',
  styleUrls: ['./du-config.component.css']
})
export class DuConfigComponent implements OnInit, OnDestroy {
  public route_config;
  subscription1$: Subscription;
  subscription2$: Subscription;
  subscriptions: Subscription[] = [];
  config: FieldAttrConfig[];
  activeIds: string[] = ['panel-0'];
  panels = [];
  toggleBtn: boolean = true;

  constructor(private rls: ResetLayoutService, private fns: FooterNavigationService, private rs: RouteConfigService, private nrs: NavigateRouteService, private route: ActivatedRoute) {
    rls.initWithVenueDetails();

    this.route_config = rs.getConfig("du_config");

    fns.setNextBtnLabel = this.route_config.nextBtnLabel;
    fns.setPrevBtnLabel = this.route_config.prevBtnLabel;


    this.config = [
      {
        section: 'DU Instance Configuration - DU00001',
        status: 'pending',
        fields: [
          {
            type: 'input',
            label: 'DU gNodeB ID',
            name: 'gNodebId',
            isMandatory: true,
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'This field is required'
              }
            ]
          },
          {
            type: 'input',
            label: 'DU gNodeB ID Length',
            name: 'du_gNodeB_ID_Length',
            isMandatory: true,
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'This field is required'
              }
            ]
          },
          {
            type: 'input',
            label: '01 FQDN / IP Address',
            name: 'fqdn',
            isMandatory: true,
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'This field is required'
              }
            ]
          },
          {
            type: 'input',
            label: '01  Service Name',
            name: '01_u_service_name',
            isMandatory: true,
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'This field is required'
              }
            ]
          }

        ]
      },
      {
        section: 'DU Instance Configuration - DU00002',
        status: 'pending',
        fields: [
          {
            type: 'input',
            label: 'DU gNodeB ID',
            name: 'gNodebId',
            isMandatory: true,
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'This field is required'
              }
            ]
          },
          {
            type: 'input',
            label: 'DU gNodeB ID Length',
            name: 'du_gNodeB_ID_Length',
            isMandatory: true,
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'This field is required'
              }
            ]
          },
          {
            type: 'input',
            label: '01 FQDN / IP Address',
            name: 'fqdn',
            isMandatory: true,
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'This field is required'
              }
            ]
          },
          {
            type: 'input',
            label: '01  Service Name',
            name: '01_u_service_name',
            isMandatory: true,
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'This field is required'
              }
            ]
          }

        ]
      },
      {
        section: 'DU Instance Configuration - DU00003',
        status: 'pending',
        fields: [
          {
            type: 'input',
            label: 'DU gNodeB ID',
            name: 'gNodebId',
            isMandatory: true,
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'This field is required'
              }
            ]
          },
          {
            type: 'input',
            label: 'DU gNodeB ID Length',
            name: 'du_gNodeB_ID_Length',
            isMandatory: true,
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'This field is required'
              }
            ]
          },
          {
            type: 'input',
            label: '01 FQDN / IP Address',
            name: 'fqdn',
            isMandatory: true,
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'This field is required'
              }
            ]
          },
          {
            type: 'input',
            label: '01  Service Name',
            name: '01_u_service_name',
            isMandatory: true,
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'This field is required'
              }
            ]
          }

        ]
      }
    ];

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
  }

  ngOnInit(): void {   

  }

  formSubmitted(event) {
    console.log(event);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }

}
