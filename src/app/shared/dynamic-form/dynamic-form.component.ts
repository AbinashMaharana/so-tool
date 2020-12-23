import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import {NgbAccordion} from '@ng-bootstrap/ng-bootstrap';
import { FieldConfig } from 'src/app/models/FieldConfig';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  
  @Input()
  config: FieldConfig[] = [];
  @Input()
  model: any = {};
  @Output()
  submitted: EventEmitter<any> = new EventEmitter();

  @Input()
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.createGroup();
    this.form.patchValue(this.model);
  }
  createGroup() {
    const group = this.fb.group({});
    // console.log("this.config");
    // console.log(this.config);
    this.config.forEach((control) => {
      const controls = this.fb.control(
        control.value,
        this.bindValidations(control.validations || [])
      );
      group.addControl(control.name, controls);
    })

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
