import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GnodebNetworkConfigComponent } from './gnodeb-network-config.component';

const routes: Routes = [
  {
    path: '',
    component: GnodebNetworkConfigComponent,
    data: { title: 'GNodeB Network Configuration' }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GnodebNetworkConfigRoutingModule { }
