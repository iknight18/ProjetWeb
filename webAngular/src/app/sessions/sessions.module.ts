import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsComponent } from './sessions/sessions.component';
import { BrowserModule } from '@angular/platform-browser';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsEditComponent } from './sessions-edit/sessions-edit.component';
import { SessionsAddComponent } from './sessions-add/sessions-add.component';

@NgModule({
  declarations: [
    SessionsComponent,
    SessionsListComponent,
    SessionItemComponent,
    SessionsEditComponent,
    SessionsAddComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SessionsRoutingModule,
  ],
  bootstrap: [SessionsComponent],
  providers: [],
})
export class SessionsModule { }
