import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { SidebarService } from 'src/app/helper/sidebar.service';
import { NavItem } from 'src/app/models/NavItem';


@Component({
  selector: 'so-navigation',
  templateUrl: './so-navigation.component.html',
  styleUrls: ['./so-navigation.component.css']
})
export class SoNavigationComponent implements OnInit {
  @Output()
  toggle: EventEmitter<any> = new EventEmitter();
  pinMenuSubscription: Subscription;
  isPinned: boolean = false;
  path:string[] = [];
  mainNavMenuList: NavItem[];
  
  constructor(private sidebarService: SidebarService, private location: Location) {

    this.pinMenuSubscription = sidebarService.getPinStatus.subscribe(event => {
      this.isPinned = event;
    });

    this.path = location.path().split("/");

    this.mainNavMenuList = [
      {
        displayName: 'Dashboard',
        iconName: 'globe',
        route: '/dashboard',
        submenu: false,
        isActive: this.path.includes("dashboard")
      },
      {
        displayName: 'Venue Planning',
        iconName: 'globe',
        route: '/venue_planning/venue_details',
        submenu: true,
        isActive: this.path.indexOf("venue_planning") != -1 ? true : false
      }
    ];
  }

  ngOnInit(): void {
  }

  toggleMenu($event) {
    if (!this.isPinned) {
      this.toggle.emit($event);
    }
  }

 
}
