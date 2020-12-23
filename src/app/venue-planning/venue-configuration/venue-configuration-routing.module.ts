import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VENUE_CONFIG_ROUTES } from '../../routes/venue-config.routes';

const routes = VENUE_CONFIG_ROUTES;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueConfigurationRoutingModule {

}
