import { OnDestroy, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { FooterNavigationService } from 'src/app/helper/footer-navigation.service';
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
  @ViewChild('acc') accordionComponent: NgbAccordion;
  public route_config;

  subscription1$: Subscription;
  subscription2$: Subscription;
  subscriptions: Subscription[] = [];


  constructor(private rls: ResetLayoutService, private fns: FooterNavigationService, private rs: RouteConfigService, private nrs: NavigateRouteService, private route: ActivatedRoute) {
    rls.initWithVenueDetails();

    this.route_config = rs.getConfig("cucp_config");

    fns.setNextBtnLabel = this.route_config.nextBtnLabel;
    fns.setPrevBtnLabel = this.route_config.prevBtnLabel;


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

  form: FormGroup = new FormGroup({});

  model = {};
  config: FieldAttrConfig[] = [
    {
      section: 'CUCP Instance Configuration',
      status: 'pending',
      fields: [
        {
          type: 'input',
          label: 'CUCP gNodeB ID',
          name: 'gNodebId',
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
      section: 'Associate CUUP',
      status: 'completed',
      fields: [
        {
          type: 'table',
          label: 'CUCP gNodeB ID',
          name: 'test',
          placeholder: 'Entet your name',
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
      section: 'Associate DU',
      status: 'completed',
      fields: [
        {
          type: 'table',
          label: 'CUCP gNodeB ID',
          name: 'test',
          placeholder: 'Entet your name',
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
