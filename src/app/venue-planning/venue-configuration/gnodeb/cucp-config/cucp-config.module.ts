import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CucpConfigComponent } from './cucp-config.component';
import { CucpRoutingModule } from './cucp-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CucpConfigComponent],
  imports: [
    CommonModule,
    SharedModule,
    CucpRoutingModule
  ]
})
export class CucpConfigModule { }
