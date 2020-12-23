import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ImportInputFilesComponent } from './import-input-file.component';
import { ImportInputFilesRoutingModule } from './import-input-file-routing.module';



@NgModule({
  declarations: [ImportInputFilesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImportInputFilesRoutingModule
  ]
})
export class ImportInputFilesdModule {
}
