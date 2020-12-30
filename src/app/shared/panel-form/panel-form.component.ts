import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { FormValidationService } from 'src/app/helper/form-validation.service';
import { FieldAttrConfig } from 'src/app/models/FieldConfig';

@Component({
  selector: 'so-panel-form',
  templateUrl: './panel-form.component.html',
  styleUrls: ['./panel-form.component.css']
})
export class PanelFormComponent implements OnInit {
  @ViewChild('acc') accordionComponent: NgbAccordion;  
  public route_config;
  subscription1$: Subscription;
  subscription2$: Subscription;
  subscription3$: Subscription;
  subscriptions: Subscription[] = [];  
  activeIds: string[] = ['panel-0'];
  formPanels = [];
  toggleBtn = true;

  @Input() config: FieldAttrConfig[];
  form: FormGroup = this.fb.group({});
  model = {};

  constructor(private fb: FormBuilder, private validateForm: FormValidationService) { }

  ngOnInit(): void {
    for (let i = 0; i < this.config.length; i++) {
      this.formPanels.push(i);
    }
    this.form.addControl('data', new FormArray([]));
  }
  openAll() {
    this.activeIds = this.formPanels.map(p => "panel-" + p);
    this.toggleBtn = true;
  }
  closeAll() {
    this.activeIds = [];
    this.toggleBtn = false;
  }
}
