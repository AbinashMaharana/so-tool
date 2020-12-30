import { OnDestroy, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { FooterNavigationService } from 'src/app/helper/footer-navigation.service';
import { FormValidationService } from 'src/app/helper/form-validation.service';
import { NavigateRouteService } from 'src/app/helper/navigate.service';
import { ResetLayoutService } from 'src/app/helper/reset-layout-element';
import { RouteConfigService } from 'src/app/helper/route-config.service';
import { FieldAttrConfig } from 'src/app/models/FieldConfig';


@Component({
  selector: 'app-cucp-config',
  templateUrl: './cucp-config.component.html',
  styleUrls: ['./cucp-config.component.css']
})
export class CucpConfigComponent implements OnInit, OnDestroy {
  public route_config;
  subscription1$: Subscription;
  subscription2$: Subscription;
  subscription3$: Subscription;
  subscriptions: Subscription[] = [];
  config: FieldAttrConfig[];

  constructor(private rls: ResetLayoutService, private fb: FormBuilder, private fns: FooterNavigationService, private rs: RouteConfigService, private nrs: NavigateRouteService, private route: ActivatedRoute, private validateForm: FormValidationService) {
    rls.initWithVenueDetails();

    this.route_config = rs.getConfig("cucp_config");

    fns.setNextBtnLabel = this.route_config.nextBtnLabel;
    fns.setPrevBtnLabel = this.route_config.prevBtnLabel;

    this.subscription3$ = this.validateForm.getFormStatus.subscribe(event => {
      if (event) {
      console.log(event.status);
       
      } else {
     
      }
    });
    
    this.config = [
      {
        id:1,
        section: 'CUCP Instance Configuration',
        status: 'pending',
        fields: [
          {
            type: 'input',
            label: 'CUCP gNodeB ID',
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
            label: 'CUCP gNodeB ID Length',
            name: 'cucp_gNodeB_ID_Length',
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
            label: 'Cell Local ID',
            name: 'cell_local_Id',
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
            type: 'table',
            label: 'PLMN',
            name: 'plmn',
            tableGroup: [{ mcc: '', mnc: '' }],
            validations: []
          }
        ]
      },
      {
        id:2,
        section: 'Associate CUUP',
        status: 'completed',
        fields: [
          {
            type: 'table',
            label: '',
            columnLabel: 'List of CUUP gNodeB IDs',
            name: 'cuupIds',
            tableGroup: [{ cucpId: '' }],
            validations: []
          }
        ]
      },
      {
        id:3,
        section: 'Associate DU',
        status: 'completed',
        fields: [
          {
            type: 'table',
            label: '',
            columnLabel: 'List of DU gNodeB IDs',
            name: 'cucpIds',
            tableGroup: [{ duId: '' }],
            validations: []
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

  

    this.subscriptions.push(this.subscription1$, this.subscription2$, this.subscription3$);
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
