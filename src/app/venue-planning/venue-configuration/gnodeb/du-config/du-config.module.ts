import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { DuConfigComponent } from './du-config.component';
import { DuRoutingModule } from './du-routing.module';

@NgModule({
    declarations: [DuConfigComponent],
    imports: [
        CommonModule,
        DuRoutingModule,
        SharedModule
    ]
})
export class DuConfigModule { }