import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (localStorage.getItem('sessionId')) {
      req = req.clone({
        setHeaders: {
          SESSION: localStorage.getItem('sessionId')
        }
      })
    }
    return next.handle(req);
  }
}