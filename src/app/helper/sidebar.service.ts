import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class SidebarService {

  private sidebarStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private pinningStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  set setPinStatus(pinStatus) {
    this.pinningStatus.next(pinStatus)
  }

  set setStatus(status: boolean) {
    this.sidebarStatus.next(status);
  }

  get getPinStatus(): Observable<boolean> {
    return this.pinningStatus.asObservable();
  }

  get getStatus(): Observable<boolean> {
    return this.sidebarStatus.asObservable();
  }

}
