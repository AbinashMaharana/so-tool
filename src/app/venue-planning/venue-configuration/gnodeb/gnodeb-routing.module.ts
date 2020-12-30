import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GnodebComponent } from './gnodeb.component';

const routes: Routes = [
  {
    path: '',
    component: GnodebComponent,
    children: [
      {
        path: 'cuup_config',
        loadChildren: () =>
          import('./cuup-config/cuup-config.module').then((m) => m.CuupConfigModule),
        data: { title: 'CUUP Configuration' }
      },
      {
        path: 'du_config',
        loadChildren: () =>
          import('./du-config/du-config.module').then((m) => m.DuConfigModule),
        data: { title: 'DU Configuration' }
      },
      {
        path: 'cucp_config',
        loadChildren: () => import('./cucp-config/cucp-config.module').then((m) => m.CucpConfigModule),
        data: { title: 'CUCP Configuration' }
      },
      {
        path: 'radio_units',
        loadChildren: () => import('./radio-unit/radio-unit.module').then((m) => m.RadioUnitModule),
        data: { title: 'Radio Unit Configuration' }
      },
      {
        path: '',
        redirectTo: 'cucp_config',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GnodebRoutingModule { }