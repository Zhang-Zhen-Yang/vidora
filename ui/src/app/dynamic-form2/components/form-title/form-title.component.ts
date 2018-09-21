import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-title',
  styleUrls: ['form-title.component.scss'],
  template: `
    <div [ngStyle]="config.style">
      {{ config.label }}
    </div>
  `
})
export class FormTitleComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
