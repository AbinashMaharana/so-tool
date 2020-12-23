import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { FooterNavigationService } from '../helper/footer-navigation.service';
import { NavigateRouteService } from '../helper/navigate.service';
import { ResetLayoutService } from '../helper/reset-layout-element';
import { RouteConfigService } from '../helper/route-config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  label: string = "Dashboard";
  public route_config;
  subscription1$: Subscription;
  subscription2$: Subscription;
  subscriptions: Subscription[] = [];
  constructor(private rls: ResetLayoutService, private fns: FooterNavigationService, private rs: RouteConfigService, private nrs: NavigateRouteService, private route: ActivatedRoute) {
    rls.initDashboard();

    this.route_config = rs.getConfig("dashboard");
    console.log(this.route_config);
    fns.setNextBtnLabel = this.route_config.nextBtnLabel;
    fns.setPrevBtnLabel = this.route_config.prevBtnLabel;
    fns.setNextBtnVisibleStatus = false;

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
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }
}
