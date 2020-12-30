import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuConfigComponent } from './du-config.component';


const routes: Routes = [
    {
        path: '',
        component: DuConfigComponent,
        data: { title: 'DU Configuration' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DuRoutingModule { }