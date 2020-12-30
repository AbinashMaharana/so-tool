import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from 'src/app/helper/form-validation.service';
import { FieldConfig } from 'src/app/models/FieldConfig';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input()
  inputFieldConfig: FieldConfig[] = [];

  @Input()
  formConfig;

  @Input()
  model: any = {};
  @Output()
  submitted: EventEmitter<any> = new EventEmitter();


  @Input()
  form: FormGroup;

  

  constructor(private fb: FormBuilder, private validateForm: FormValidationService) { }

  ngOnInit(): void {
    this.form = this.createGroup();
    this.form.patchValue(this.model);
    this.validateForm.setFormStatus = this.formConfig;
    console.log(this.form);
  }
  createGroup() {
    const group = this.fb.group({});
   for(let i = 0; i < this.formConfig.length; i++){
    this.formConfig[i].fields.forEach((control) => {
      if (control.type == "table") {      
        group.addControl(control.name, new FormArray([]));       
        return group;
      }
      const controls = this.fb.control(
        control.value,
        this.bindValidations(control.validations || [])
      );
      group.addControl(control.name, controls);
      
    })
}
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validationList = [];
      validations.forEach((valid) => {
        validationList.push(valid.validator);
      });
      return Validators.compose(validationList);
    }
    return null;
  }
  onSubmit(event) {

  }
}
