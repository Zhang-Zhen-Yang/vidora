import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";
// import { DynamicFormsBootstrapUIModule } from "@ng-dynamic-forms/ui-bootstrap";
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormModule } from './dynamic-form2/dynamic-form.module';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { WorkcanvasComponent } from './workcanvas/workcanvas.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { ActionpanelComponent } from './actionpanel/actionpanel.component';
import { CanvasSpaceComponent } from './canvas-space/canvas-space.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AnimateTemplateComponent } from './animate-template/animate-template.component';
import { AnimateTemplateItemComponent } from './animate-template-item/animate-template-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    WorkspaceComponent,
    WorkcanvasComponent,
    LeftbarComponent,
    BottombarComponent,
    ActionpanelComponent,
    CanvasSpaceComponent,
    AnimateTemplateComponent,
    AnimateTemplateItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule,
    // DynamicFormsBootstrapUIModule,

    DynamicFormModule
  ],
  entryComponents: [
    AnimateTemplateComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
