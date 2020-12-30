import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormValidationService } from 'src/app/helper/form-validation.service';
import { FieldConfig } from 'src/app/models/FieldConfig';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  panelConfig;
  inputFieldConfig: FieldConfig;
  group: FormGroup;
  formConfig;

  constructor(private validateForm: FormValidationService) {

  }

  ngOnInit(): void {
  }
  isValidForm() {
    this.group.valid ? this.panelConfig.status = 'completed' : this.panelConfig.status = 'pending';
    this.validateForm.setFormStatus = this.panelConfig;
  }
}
