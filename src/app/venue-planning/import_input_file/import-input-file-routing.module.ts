import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportInputFilesComponent } from './import-input-file.component';


const routes: Routes = [
  {
    path: '',
    component: ImportInputFilesComponent,
    data: { title: 'Import Files' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportInputFilesRoutingModule { }
