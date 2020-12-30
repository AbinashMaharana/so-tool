import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl, FormArray, FormBuilder } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { FieldConfig } from 'src/app/models/FieldConfig';
import {FormValidationService} from '../../../../helper/form-validation.service';

@Component({
  selector: 'form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {
  panelConfig;
  inputFieldConfig: FieldConfig;
  group: FormGroup;
  data: any[];
  columns: any[] = [];
  displayedColumns: any[] = [];
  dataSource = new BehaviorSubject<AbstractControl[]>([]);

  constructor(private fb: FormBuilder, private validateForm: FormValidationService) { }

  ngOnInit() {
    this.data = this.inputFieldConfig.tableGroup;
    this.columns = this.createColumn();
    this.displayedColumns = this.columns.map(c => c.columnDef);
    this.data.forEach((d: any) => this.addRow(d, false));
    this.updateView();
  }

   get rowInputFieldsControl() {
    return this.group.get(this.inputFieldConfig.name) as FormArray;
  }
  deleteRow(index: number) {
    if ((<FormArray>this.group.get(this.inputFieldConfig.name)).length != 0) {
      (<FormArray>this.group.get(this.inputFieldConfig.name)).removeAt(index);
      this.updateView();
    }
  }

 


  createColumn() {
    let columnArr = [];
    // let id = { columnDef: 'id', header: 'ID', type: 'checkbox', cell: (element: any) => `${element.id ? element.id : 'id'}` };
    // columnArr.push(id);
    for (let props in this.data[0]) {
      let x = { columnDef: props, header: this.inputFieldConfig.columnLabel ? this.inputFieldConfig.columnLabel : props.toUpperCase(), type: 'input', cell: (element: any) => `${element.mcc ? element.mcc : props}` }
      columnArr.push(x);
    }
    let btn = { columnDef: 'Delete', header: 'DELETE', type: 'button', cell: (element: any) => `${element.Delete ? element.Delete : 'delete'}` };
    columnArr.push(btn);
    return columnArr;
  }

  addRow(d?: any, noUpdate?: boolean) {

    let obj = {}
    for (let props in this.data[0]) {
      obj[props] = [d && d[props] ? d[props] : '', []]
    }

    const row = this.fb.group(obj);

    (<FormArray>this.group.get(this.inputFieldConfig.name)).push(row);
    if (!noUpdate) { this.updateView(); }
 
  }

  updateView() {
    this.dataSource.next((<FormArray>this.group.get(this.inputFieldConfig.name)).controls);
  }
}

