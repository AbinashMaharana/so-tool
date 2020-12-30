import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AuthService } from '../../authentication/auth.service';
import { SidebarService } from '../../helper/sidebar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  public label: string;
  public path: string[] = [];
  // public headerToLoad: string;
  public isSubmenuActive: boolean;
  public show: boolean;

  constructor(private authService: AuthService, private sidebarService: SidebarService, private router: Router, private route: ActivatedRoute) {

    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe((event: NavigationEnd) => {
    //   this.path = event.url.substring(1).split('/');
    //   this.headerToLoad = this.path[this.path.length - 1];
    // });
  }

  ngOnInit(): void {

  }

  toggleSubMenu(event) {
    this.sidebarService.setStatus = event;
  }

  signOut() {
    this.authService.logout();
  }

  test() {
    this.show = !this.show;
  }
}
