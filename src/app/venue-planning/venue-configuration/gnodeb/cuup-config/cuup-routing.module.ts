import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuupConfigComponent } from './cuup-config.component';


const routes: Routes = [
    {
        path: '',
        component: CuupConfigComponent,
        data: { title: 'CUCP Configuration' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CuupRoutingModule { }