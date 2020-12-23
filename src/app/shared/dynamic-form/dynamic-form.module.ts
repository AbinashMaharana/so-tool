import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFieldDirective } from './dynamic-field.directive';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormTableComponent } from './components/form-table/form-table.component';
import { DynamicFormComponent } from './dynamic-form.component';



@NgModule({
  declarations: [DynamicFieldDirective, DynamicFormComponent, FormInputComponent, FormSelectComponent, FormTableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[DynamicFormComponent],
  entryComponents:[
    FormInputComponent,
    FormSelectComponent,
    FormTableComponent
  ]
})
export class DynamicFormModule { }
