import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Subject, Observable, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AppConfigService } from '../service/app-config.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private USER_MGMT_SERVICE_URL: string;

  isUserLogIn = new Subject<boolean>();
  userSubject = new ReplaySubject<User>(1);

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.USER_MGMT_SERVICE_URL = appConfigService.getConfig()['settings']['userMngmtService'];
  }

  public authenticate(userData: User) {
    // if (userData.username == "soadmin" && userData.password == "password") {
    //   return true;
    // } else {
    //   return false;
    // }

    const headers = new HttpHeaders({});
    headers.append("Content-Type", "application/json");

    return this.http.post<User>(this.USER_MGMT_SERVICE_URL + '/api/user/authorize', userData, { headers }).pipe(
      map(
        userData => {
          this.userSubject.next(userData);
          // localStorage.setItem('userdetails', JSON.stringify(userData));
          localStorage.setItem('sessionId', userData.sessionId);
          // let authString = 'Basic ' + btoa(userData.username + ':' + userData.password);
          // localStorage.setItem('basicauth', authString);
          return userData;
        }
      )

    ).pipe(catchError(this.handleError));

    // localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  handleError(error: HttpErrorResponse) {
    // let enabled=true;let password=null; let username=null;let authorities=null;
    // let accountNonLocked=false; let accountNonExpired=false; let credentialsNonExpired=false;
    // var usr = new User(enabled,password,username,authorities,accountNonLocked,accountNonExpired,credentialsNonExpired);
    // return usr;

    return " ";
  }

  public isLoggedIn(): Observable<boolean> {
    let sessionId = localStorage.getItem('sessionId');
    this.isUserLogIn.next(!(sessionId === null));
    return this.isUserLogIn.asObservable();
  }

  public logout() {
    // console.log('log Out');

    this.http.get(this.USER_MGMT_SERVICE_URL + '/logout').subscribe(res => {
      console.log(res);
    })
    localStorage.removeItem('sessionId');
  }

}
