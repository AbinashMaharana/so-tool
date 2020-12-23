import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FooterNavigationService } from './footer-navigation.service';
import { PageTitleService } from './page-title.service';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ResetLayoutService {
    constructor(private fns: FooterNavigationService, private pts: PageTitleService) {
       
    }
    init(){
        this.fns.setNextBtnVisibleStatus = true;
        this.pts.setAddVenueBtnStatus = true;
        this.pts.showVenueDetails = true;
        this.fns.setNextBtnStatus = false;
        this.fns.setPrevBtnStatus = false;
    }

    initWithVenueDetails(){
        this.fns.setNextBtnVisibleStatus = true;
        this.pts.setAddVenueBtnStatus = true;
        this.pts.showVenueDetails = false;
        this.fns.setNextBtnStatus = false;
        this.fns.setPrevBtnStatus = false;
    }

    initDashboard(){
        this.fns.setNextBtnVisibleStatus = true;
        this.pts.setAddVenueBtnStatus = false;
        this.pts.showVenueDetails = true;
        this.fns.setNextBtnStatus = false;
        this.fns.setPrevBtnStatus = false;
    }
}