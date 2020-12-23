import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CucpConfigComponent } from './cucp-config.component';


const routes: Routes = [
    {
        path: '',
        component: CucpConfigComponent,
        data: { title: 'CUCP Configuration' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CucpRoutingModule { }
