import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable(
    {
        providedIn: 'root'
    }
)
export class PageTitleService {

    private showAddVenueBtn: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private showVenueDetail: BehaviorSubject<boolean> = new BehaviorSubject(true);
    constructor() { }

    set setAddVenueBtnStatus(btnStatus) {

        this.showAddVenueBtn.next(btnStatus)
    }


    get getAddVenueBtnStatus(): Observable<boolean> {
        return this.showAddVenueBtn.asObservable();
    }

    set showVenueDetails(btnStatus) {

        this.showVenueDetail.next(btnStatus)
    }


    get getshowVenueDetails(): Observable<boolean> {
        return this.showVenueDetail.asObservable();
    }
}
