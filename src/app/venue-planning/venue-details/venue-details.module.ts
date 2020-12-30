import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { VenueDetailsRoutingModule } from './venue-details-routing.module';
import { VenueDetailsComponent } from './venue-details.component';


@NgModule({
  declarations: [VenueDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    VenueDetailsRoutingModule
  ]
})
export class VenueDetailsdModule {
}
