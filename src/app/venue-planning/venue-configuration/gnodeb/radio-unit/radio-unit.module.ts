import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioUnitRoutingModule } from './radio-unit-routing.module';
import { RadioUnitComponent } from './radio-unit.component';


@NgModule({
    declarations: [RadioUnitComponent],
    imports: [
        CommonModule,
        RadioUnitRoutingModule
    ]
})
export class RadioUnitModule { }




