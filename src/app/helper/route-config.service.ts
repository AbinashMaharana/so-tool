import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class RouteConfigService {
    private routeConfig;

    constructor(private http: HttpClient) { }
    loadRouteConfig() {
        return this.http.get('./assets/config/routes.json')
            .toPromise()
            .then(data => {
                this.routeConfig = data;
            });
    }

    getConfig(active_path) {
        return this.routeConfig.routes[active_path];
    }
}
