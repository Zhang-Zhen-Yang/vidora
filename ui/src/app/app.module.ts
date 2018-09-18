import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";
// import { DynamicFormsBootstrapUIModule } from "@ng-dynamic-forms/ui-bootstrap";
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormModule } from './dynamic-form2/dynamic-form.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { WorkspaceComponent } from './component/workspace/workspace.component';
import { WorkcanvasComponent } from './component/workcanvas/workcanvas.component';
import { LeftbarComponent } from './component/leftbar/leftbar.component';
import { BottombarComponent } from './component/bottombar/bottombar.component';
import { ActionpanelComponent } from './component/actionpanel/actionpanel.component';
import { CanvasSpaceComponent } from './component/canvas-space/canvas-space.component';

// material
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatMenuModule} from '@angular/material/menu';


import { AnimateTemplateComponent } from './component/animate-template/animate-template.component';
import { AnimateTemplateItemComponent } from './component/animate-template-item/animate-template-item.component';
import { AnimateTemplateLoadingProgressComponent } from './component/animate-template-loading-progress/animate-template-loading-progress.component';

import { ExportOptionsComponent } from './component/export-options/export-options.component';
import { GeneratingProgressComponent } from './component/generating-progress/generating-progress.component';
import { AudioManagerComponent } from './component/audio-manager/audio-manager.component';
import { ActionpanelItemComponent } from './component/actionpanel-item/actionpanel-item.component';
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
    AnimateTemplateLoadingProgressComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
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
    AnimateTemplateLoadingProgressComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
