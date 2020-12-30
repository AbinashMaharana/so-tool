import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';
import { SidebarService } from '../../helper/sidebar.service';
import { SideMenuListService } from '../../service/sidemenu.service';

declare const require: any;

@Component({
  selector: 'so-sidemenu',
  templateUrl: './so-sidemenu.component.html',
  styleUrls: ['./so-sidemenu.component.css']
})
export class SoSidemenuComponent implements OnInit, OnDestroy {
  sideMenuSubscription: Subscription;
  show: boolean;
  submenuList: any;
  isPinned: boolean;
  showSideMenu: boolean;
  subscription1$: Subscription;
  subscription2$: Subscription;

  subscriptions: Subscription[] = [];
  constructor(private translate: TranslateService, private ss: SidebarService, private router: Router, private smList: SideMenuListService) {

    this.subscription1$ = ss.getStatus.subscribe(event => {
      this.show = event;
      this.showSideMenu = this.show;
      console.log(event);
    });

    this.smList.setSubMenuList();
    // translate.setTranslation('en', require('../../../assets/i18n/en.json'));
    // translate.setDefaultLang('en');
    // translate.use('en');
    this.subscription2$ = this.smList.getSubMenuList.subscribe(list => {
      this.submenuList = list;
    });
    this.subscriptions.push(this.subscription1$, this.subscription2$);
  }

  ngOnInit(): void {
  }


  hideSubMenu(subMenu) {
    if (subMenu && subMenu.length > 0) {
      this.ss.setStatus = true;
    } else {
      this.ss.setStatus = false;
    }
  }

  showMenu() {
    this.ss.setStatus = true;
    this.showSideMenu = true;
  }

  hideMenu() {
    this.ss.setStatus = false;
    this.showSideMenu = false;
  }

  navigate(e, link) {

    this.router.navigate([link]);

    e.stopPropagation();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }
}
