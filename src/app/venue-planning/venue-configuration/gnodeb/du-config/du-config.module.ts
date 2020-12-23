import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuConfigComponent } from './du-config.component';
import { DuRoutingModule } from './du-routing.module';

@NgModule({
    declarations: [DuConfigComponent],
    imports: [
        CommonModule,
        DuRoutingModule
    ]
})
export class DuConfigModule { }