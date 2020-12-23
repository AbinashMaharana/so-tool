import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdgeCloudComponent } from './edge-cloud.component';
import { EdgeCloudRoutingModule } from './edge-cloud-routing.module';





@NgModule({
  declarations: [EdgeCloudComponent],
  imports: [
    CommonModule,
    EdgeCloudRoutingModule
  ]
})
export class EdgeCloudModule { }
