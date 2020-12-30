import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarService } from 'src/app/helper/sidebar.service';

import { PageTitleService } from '../../helper/page-title.service';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  venueDetails: any;
  showVenueBtn: boolean;
  showVenueDetail: boolean;
  isSideMenuVisible: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private pts: PageTitleService, private ss: SidebarService) {
    pts.getAddVenueBtnStatus.subscribe(event => {
      this.showVenueBtn = event;
      console.log(event);
    })
    pts.getshowVenueDetails.subscribe(event => {
      this.showVenueDetail = event;
      console.log(event);
    })

    ss.getStatus.subscribe(event => {      
      this.isSideMenuVisible = event
    });

  }

  ngOnInit(): void {
    this.venueDetails = {
      customer: "TMobile",
      venueName: "Bancroft Airport Deployments",
      location: "Bancroft Airport, John Fitch Boulevard, East Bancroft Airport, John Fitch Boulevard, East Bancroft Airport"
    }
  }
  addNewVenue() {
    this.router.navigate(['/venue_planning/venue_details'], { relativeTo: this.route });
  }
}
