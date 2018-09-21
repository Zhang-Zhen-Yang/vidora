import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-checkbox',
  styleUrls: ['form-checkbox.component.scss'],
  template: `
    <div
      class="dynamic-field form-input f aic" 
      [formGroup]="group">
      <div class="label">
        {{ config.label }}
      </div>
      <div style="flex:1;flex-wrap: wrap;">
        <div *ngFor="let item of config.options">
          <label class="checkbox-wrap f aic">
            <input
              #i
              [checked]="config.value[item.name]"
              (change)="itemChange(item.name, i);"
              type="checkbox" >
            <div class="checkbox-rect"></div>
            {{ item.name }}
          </label>
        </div>
      </div>
      <!--<input
        type="checkbox"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name" >-->
    </div>
  `
})
export class FormCheckboxComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
  itemChange(name,res) {
    this.config.value[name] = res.checked;
    this.group.controls[this.config.name].setValue(this.config.value);
  }
}
