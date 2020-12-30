import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('../dashboard/dasboard.module').then(m => m.DasboardModule)
    }
]