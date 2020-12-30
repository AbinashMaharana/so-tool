import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GnodebRoutingModule } from './gnodeb-routing.module';
import { GnodebComponent } from './gnodeb.component';


@NgModule({
  declarations: [GnodebComponent],
  imports: [
    CommonModule,
    GnodebRoutingModule
  ]
})
export class GnodebModule { }
