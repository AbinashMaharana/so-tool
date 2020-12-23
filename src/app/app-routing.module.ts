import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

import { VENUE_PLANNER_ROUTES } from './routes/venue-planner.routes';
import { DASHBOARD_ROUTES } from './routes/dashboard-layout.routes';
import { LOGIN_ROUTES } from './routes/login-layout.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LoginLayoutComponent, children: LOGIN_ROUTES },
  { path: 'dashboard', component: AppLayoutComponent, children: DASHBOARD_ROUTES, data: { title: 'Dashboard' } },
  { path: 'venue_planning', component: AppLayoutComponent, children: VENUE_PLANNER_ROUTES, data: { title: 'Venue Planning' }},
  { path: '**', component: PageNotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
