export interface Validator {
    name: string;
    validator: any;
    message: string;
}

export interface FieldConfig {
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[];
    collections?: any;
    type?: string;
    value?: any;
    fileName?: string;
    tooltipInfo?: string;
    required?: boolean;
    placeholder?: string;
    validations?: Validator[];
}

export interface FieldAttrConfig {
    section?: string;
    status?: string
    fields?: FieldConfig[];
}