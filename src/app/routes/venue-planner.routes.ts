import { Routes } from '@angular/router';
import { VenueConfigurationComponent } from '../venue-planning/venue-configuration/venue-configuration.component';
import { VENUE_CONFIG_ROUTES } from './venue-config.routes';

export const VENUE_PLANNER_ROUTES: Routes = [
  {
    path: 'venue_details',
    loadChildren: () =>
      import('../venue-planning/venue-details/venue-details.module').then(
        (m) => m.VenueDetailsdModule
      ),
    data: { title: 'Venue Details' },
  },
  {
    path: 'import_files',
    loadChildren: () =>
      import(
        '../venue-planning/import_input_file/import-input-file.module'
      ).then((m) => m.ImportInputFilesdModule),
    data: { title: 'Import Input Files' },
  },
  {
    path: 'venue_configuration',
    component: VenueConfigurationComponent,
    children: VENUE_CONFIG_ROUTES,
    data: { title: 'Venue Configuration' },
  },
  {
    path: '',
    redirectTo: 'venue_details',
    pathMatch: 'full'
  },
];