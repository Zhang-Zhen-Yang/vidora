import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-button',
  styleUrls: ['form-button.component.scss'],
  template: `
    <div 
      class="dynamic-field form-button"
      [formGroup]="group"
    >
      <button
        class="blue block"
        [disabled]="config.disabled"
        (click)="click()"
      >
        {{ config.label }}
      </button>
      <input
        type="text"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
    </div>
  `
})
export class FormButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
  click() {
    // alert('dddd');
    this.group.controls[this.config.name].setValue(Date.now(), {emitEvent: true});
  }
}
