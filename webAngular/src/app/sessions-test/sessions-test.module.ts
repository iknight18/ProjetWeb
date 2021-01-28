import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsComponent } from './sessions/sessions.component';
import { BrowserModule } from '@angular/platform-browser';
import { SessionsRoutingModule } from './sessions-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SessionsComponent,
  ],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    FormsModule
  ],
  bootstrap: [SessionsComponent],
  providers: [],
})
export class SessionsModule { }
