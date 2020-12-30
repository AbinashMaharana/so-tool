import { ComponentFactoryResolver, Directive, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormTableComponent } from './components/form-table/form-table.component';

const components = {
  input: FormInputComponent,
  select: FormSelectComponent,
  table: FormTableComponent
}

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective {
  public component;
  @Input()
  inputFieldConfig;

  @Input()
  panelConfig;

  @Input()
  model;

  @Input()
  group: FormGroup;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

ngOnInit(){
  const component = components[this.inputFieldConfig.type];
  const factory = this.resolver.resolveComponentFactory<any>(component);
  this.component = this.container.createComponent(factory);
  this.component.instance.inputFieldConfig = this.inputFieldConfig;
  this.component.instance.panelConfig = this.panelConfig;
  this.component.instance.group = this.group;
}
}
