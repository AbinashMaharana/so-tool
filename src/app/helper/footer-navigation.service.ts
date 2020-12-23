import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class FooterNavigationService {
    private enableNextBtn: BehaviorSubject<boolean> = new BehaviorSubject(true);
    private enablePrevtBtn: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private nextBtnStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private previousBtnStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private nextBtnLabel: BehaviorSubject<string> = new BehaviorSubject('');
    private prevBtnLabel: BehaviorSubject<string> = new BehaviorSubject('');

    set setNextBtnVisibleStatus(status) {
        this.enableNextBtn.next(status);
    }

    get getNextBtnVisibleStatus() {
        return this.enableNextBtn.asObservable();
    }

    set setPrevBtnVisibleStatus(status) {
        this.enablePrevtBtn.next(status);
    }

    get getPrevBtnVisibleStatus() {
        return this.enablePrevtBtn.asObservable();
    }



    set setNextBtnStatus(nxtStatus) {
        this.nextBtnStatus.next(nxtStatus)
    }


    get getNextBtnStatus() {
        return this.nextBtnStatus.asObservable();
    }



    set setPrevBtnStatus(previousStatus) {
        this.previousBtnStatus.next(previousStatus)
    }


    get getPrevBtnStatus(): Observable<boolean> {
        return this.previousBtnStatus.asObservable();
    }

    set setNextBtnLabel(nextBtnLabel) {
        this.nextBtnLabel.next(nextBtnLabel);
    }

    get getNextBtnLabel(): Observable<string> {
        return this.nextBtnLabel.asObservable();
    }
    
    set setPrevBtnLabel(prevBtnLabel) {
        this.prevBtnLabel.next(prevBtnLabel);
    }

    get getPrevBtnLabel(): Observable<string> {
        return this.prevBtnLabel.asObservable();
    }
}