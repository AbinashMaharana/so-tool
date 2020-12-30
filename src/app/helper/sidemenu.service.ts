import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class SideMenuService {

  private currentPage: BehaviorSubject<number> = new BehaviorSubject(0);


  constructor() { }

  set setCurrentPage(page) {
    this.currentPage.next(page)
  }

 
  get getCurrentPage(): Observable<number> {
    return this.currentPage.asObservable();
  }

}
