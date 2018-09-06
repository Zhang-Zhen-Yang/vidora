import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { WorkcanvasComponent } from './workcanvas/workcanvas.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { ActionpanelComponent } from './actionpanel/actionpanel.component';
import { CanvasSpaceComponent } from './canvas-space/canvas-space.component';

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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
