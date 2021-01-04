import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsComponent } from './sessions/sessions.component';
import { BrowserModule } from '@angular/platform-browser';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionsRoutingModule } from './sessions-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SessionsComponent,
    SessionsListComponent,
    SessionItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SessionsRoutingModule,
    RouterModule
  ],
  providers: [],
})
export class SessionsModule { }
