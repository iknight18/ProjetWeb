import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsComponent } from './participants/participants.component';



@NgModule({
  declarations: [ParticipantsComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [ParticipantsComponent],
  providers: [],
})
export class ParticipantsModule { }
