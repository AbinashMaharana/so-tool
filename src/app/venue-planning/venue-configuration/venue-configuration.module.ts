import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenueConfigurationRoutingModule } from './venue-configuration-routing.module';
import { VenueConfigurationComponent } from './venue-configuration.component'


@NgModule({
  declarations: [VenueConfigurationComponent],
  imports: [
    CommonModule,
    VenueConfigurationRoutingModule
  ]
})
export class VenueConfigurationModule { }
