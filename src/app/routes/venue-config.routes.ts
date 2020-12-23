import { Routes } from '@angular/router';

export const VENUE_CONFIG_ROUTES: Routes = [
  {
    path: ':gNodeB',
    loadChildren: () =>
      import(
        '../venue-planning/venue-configuration/gnodeb/gnodeb.module'
      ).then((m) => m.GnodebModule),
    data: { title: 'gNodeB' }
  },
  {
    path: 'gNodeB_network_config',
    loadChildren: () =>
      import(
        '../venue-planning/venue-configuration/gnodeb-network-config/gnodeb-network-config.module'
      ).then((m) => m.GnodebNetworkConfigModule),
    data: { title: 'gNodeB' }
  },
  {
    path: 'edge_cloud',
    loadChildren: () =>
      import(
        '../venue-planning/venue-configuration/edge-cloud/edge-cloud.module'
      ).then((m) => m.EdgeCloudModule),
    data: { title: 'gNodeB' }
  },
  {
    path: '',
    redirectTo: 'gNodeB1',
    pathMatch: 'full'
  }
];