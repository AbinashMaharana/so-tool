import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { CuupConfigComponent } from './cuup-config.component';
import { CuupRoutingModule } from './cuup-routing.module';


@NgModule({
  declarations: [CuupConfigComponent],
  imports: [
    CommonModule,
    CuupRoutingModule,
    SharedModule
  ]
})
export class CuupConfigModule { }