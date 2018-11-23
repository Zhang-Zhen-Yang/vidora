import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormImageComponent } from './components/form-image/form-image.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';
import { FormTitleComponent } from './components/form-title/form-title.component';

// material 
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
// pagination
import { NgxPaginationModule } from 'ngx-pagination';

import { ImageDialogComponent } from './components/image-dialog/image-dialog.component';
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';

import { HttpClientModule } from '@angular/common/http';
import { ImageCategoryItemComponent } from './components/image-category-item/image-category-item.component';
import { ImageItemComponent } from './components/image-item/image-item.component';
import { PaginationSimpleComponent } from './components/pagination-simple/pagination-simple.component';
import { ContentNoticeComponent } from './components/content-notice/content-notice.component';
import { CheckedIconComponent } from './components/checked-icon/checked-icon.component';
import { ImageDialogGoodsComponent } from './components/image-dialog-goods/image-dialog-goods.component';
import { TabToggleComponent } from './components/tab-toggle/tab-toggle.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatMenuModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormImageComponent,
    FormCheckboxComponent,
    FormRadioComponent,
    FormTitleComponent,
    ImageDialogComponent,
    AuthorDialogComponent,
    ImageCategoryItemComponent,
    ImageItemComponent,
    PaginationSimpleComponent,
    ContentNoticeComponent,
    CheckedIconComponent,
    ImageDialogGoodsComponent,
    TabToggleComponent,
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormImageComponent,
    FormCheckboxComponent,
    FormRadioComponent,
    FormTitleComponent,
    ImageDialogComponent,
    AuthorDialogComponent,
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class DynamicFormModule {}
