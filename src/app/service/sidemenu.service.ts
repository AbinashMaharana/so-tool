import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)

export class SideMenuListService {
    private menuList = [];
    private submenuList: BehaviorSubject<any[]> = new BehaviorSubject([]);
    constructor(private http: HttpClient) { }

    setSubMenuList() {
        this.menuList = [{
            page: 1,
            displayName: 'Venue Details',
            iconName: 'globe',
            route: '/venue_planning/venue_details',
            submenu: false,
            status: 'pending',
            disabled: false,
            firstLevel: []
        },
        {
            page: 2,
            displayName: 'Import Input Files',
            iconName: 'globe',
            route: '/venue_planning/import_files',
            submenu: false,
            status: 'pending',
            disabled: false,
            firstLevel: []
        },
        {
            page: 3,
            displayName: 'Venue Configuration',
            iconName: 'globe',
            route: '/venue_planning/venue_configuration',
            submenu: false,
            status: 'pending',
            disabled: false,
            firstLevel: this.getAllgNodeBConfig


        }
        ]
        this.submenuList.next(this.menuList);
    }

    get getAllgNodeBConfig() {
        let obj = [
            {
                displayName: 'gNodeB1',
                iconName: 'globe',
                route: '/venue_planning/venue_configuration/gNodeB1',
                status: 'pending',
                disabled: false,
                children: [
                    {
                        displayName: 'CUCP Configuration',
                        iconName: 'globe',
                        route: '/venue_planning/venue_configuration/gNodeB1/cucp_config',
                        status: 'pending',
                        disabled: false
                    },
                    {
                        displayName: 'CUUP Configuration',
                        iconName: 'globe',
                        route: '/venue_planning/venue_configuration/gNodeB1/cuup_config',
                        status: 'pending',
                        disabled: false
                    },
                    {
                        displayName: 'DU Configuration',
                        iconName: 'globe',
                        route: '/venue_planning/venue_configuration/gNodeB1/du_config',
                        status: 'pending',
                        disabled: false
                    },
                    {
                        displayName: 'Radio Unit',
                        iconName: 'globe',
                        route: '/venue_planning/venue_configuration/gNodeB1/radio_units',
                        status: 'pending',
                        disabled: false
                    }
                ]
            }
            ,
            {
                displayName: 'gNodeB2',
                iconName: 'globe',
                route: '/venue_planning/venue_configuration/gNodeB2',
                status: 'pending',
                disabled: true,
                children: [
                    {
                        displayName: 'CUCP Configuration',
                        iconName: 'globe',
                        route: '/venue_planning/venue_configuration/gNodeB2/cucp_config',
                        status: 'pending',
                        disabled: true
                    },
                    {
                        displayName: 'CUUP Configuration',
                        iconName: 'globe',
                        route: '/venue_planning/venue_configuration/gNodeB2/cuup_config',
                        status: 'pending',
                        disabled: true
                    },
                    {
                        displayName: 'DU Configuration',
                        iconName: 'globe',
                        route: '/venue_planning/venue_configuration/gNodeB2/du_config',
                        status: 'pending',
                        disabled: true
                    },
                    {
                        displayName: 'Radio Unit',
                        iconName: 'globe',
                        route: '/venue_planning/venue_configuration/gNodeB2/radio_units',
                        status: 'pending',
                        disabled: true
                    }
                ]
            },
            {
                displayName: 'gNodeB Network Configuration',
                iconName: 'globe',
                route: '/venue_planning/venue_configuration/gNodeB_network_config',
                submenu: false,
                status: 'pending',
                disabled: true,
                firstLevel: []
            },
            {
                displayName: 'Edge Cloud',
                iconName: 'globe',
                route: '/venue_planning/venue_configuration/edge_cloud',
                submenu: false,
                status: 'pending',
                disabled: true,
                firstLevel: []
            },
            {
                displayName: 'Summary and Export',
                iconName: 'globe',
                route: '/venue_planning/venue_configuration/summary_export',
                submenu: false,
                status: 'pending',
                disabled: true,
                firstLevel: []
            }

        ]
        return obj;
    }

    updateSubMenuList(pageNo) {
        for (let item = 0; item < this.menuList.length; item++) {
            if (this.menuList[item].page == pageNo) {
                if(pageNo > 1){
                    this.menuList[item-1].status = 'completed';    
                }
                this.menuList[item].disabled = false;
            }
        }
    }

    get getSubMenuList(): Observable<any[]> {
        return this.submenuList.asObservable();
    }
}
