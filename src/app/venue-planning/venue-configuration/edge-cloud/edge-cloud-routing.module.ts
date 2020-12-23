import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdgeCloudComponent } from './edge-cloud.component';

const routes: Routes = [
    {
        path: '',
        component: EdgeCloudComponent,
        data: { title: 'Edge Cloud' }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdgeCloudRoutingModule {

}

