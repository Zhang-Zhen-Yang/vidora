import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-radio',
  styleUrls: ['form-radio.component.scss'],
  template: `
    <div
      class="dynamic-field form-input f aic" 
      [formGroup]="group">
      <div class="radio-label">{{ config.label }}</div>
      <div style="flex:1;flex-wrap: wrap;">
        <label *ngFor="let item of config.options" class="radioWrap f fdr aic">
          <input
            type="radio"
            [value]="item.value"
            [attr.placeholder]="config.placeholder"
            [formControlName]="config.name" >
            <div class="radio sm"></div>
            {{ item.name }}
        </label>
      
      </div>
    </div>
  `
})
export class FormRadioComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

}
