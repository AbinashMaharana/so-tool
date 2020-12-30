import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class NavigateRouteService {


    constructor(private route: Router) { }

    navigate(path) {       
        this.route.navigate([path]);
    }
}
