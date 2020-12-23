import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioUnitComponent } from './radio-unit.component';


const routes: Routes = [
    {
        path: '',
        component: RadioUnitComponent,
        data: { title: 'Radio Unit Configuration' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RadioUnitRoutingModule { }