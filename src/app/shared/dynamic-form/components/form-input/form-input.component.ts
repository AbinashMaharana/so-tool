import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/models/FieldConfig';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
