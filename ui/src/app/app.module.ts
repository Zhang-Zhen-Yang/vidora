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

// material
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatMenuModule} from '@angular/material/menu';


import { AnimateTemplateComponent } from './animate-template/animate-template.component';
import { AnimateTemplateItemComponent } from './animate-template-item/animate-template-item.component';

import { ExportOptionsComponent } from './export-options/export-options.component';
import { GeneratingProgressComponent } from './generating-progress/generating-progress.component';
import { AudioManagerComponent } from './audio-manager/audio-manager.component';
import { ActionpanelItemComponent } from './actionpanel-item/actionpanel-item.component';
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
    ExportOptionsComponent,
    GeneratingProgressComponent,
    AudioManagerComponent,
    ActionpanelItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatMenuModule,
    DynamicFormsCoreModule,
    // DynamicFormsBootstrapUIModule,

    DynamicFormModule
  ],
  entryComponents: [
    AnimateTemplateComponent,
    ExportOptionsComponent,
    GeneratingProgressComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
