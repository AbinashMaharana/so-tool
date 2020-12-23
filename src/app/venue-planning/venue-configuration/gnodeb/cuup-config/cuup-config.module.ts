import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CuupConfigComponent } from './cuup-config.component';
import { CuupRoutingModule } from './cuup-routing.module';


@NgModule({
  declarations: [CuupConfigComponent],
  imports: [
    CommonModule,
    CuupRoutingModule
  ]
})
export class CuupConfigModule { }