import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  template: `
    <div *ngIf="config.type=='text'"
      class="dynamic-field form-input f aic" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
    </div>
    <div *ngIf="config.type=='number'"
      class="dynamic-field form-input f aic" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        type="number"
        [step]="config.step"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
    </div>
    <div *ngIf="config.type=='color'"
      class="dynamic-field form-input f aic" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        type="color"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
    </div>
  `
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
