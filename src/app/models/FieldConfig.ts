import { FormArray, FormGroup } from "@angular/forms";

export interface Validator {
    name: string;
    validator: any;
    message: string;
}

export interface FieldConfig {    
    label?: string;
    name?: any;
    isMandatory?:boolean;
    inputType?: string;
    options?: string[];
    collections?: any;
    type?: string;
    rows?:FormArray;
    columnLabel?: string;
    tableGroup?: any[];
    value?: any;
    fileName?: string;
    tooltipInfo?: string;
    required?: boolean;
    placeholder?: string;
    validations?: Validator[];
}

export interface FieldAttrConfig {
    id?:number;
    section?: string;
    status?: string
    fields?: FieldConfig[];
}