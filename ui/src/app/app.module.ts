import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { WorkcanvasComponent } from './workcanvas/workcanvas.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    WorkspaceComponent,
    WorkcanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
