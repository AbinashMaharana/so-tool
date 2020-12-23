import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenueDetailsComponent } from './venue-details.component';


const routes: Routes = [
  {
    path: '',
    component: VenueDetailsComponent,
    data: { title: 'Venue Details' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueDetailsRoutingModule { }
