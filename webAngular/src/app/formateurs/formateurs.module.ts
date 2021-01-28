import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormateursComponent } from './formateurs/formateurs.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormateursRoutingModule } from './formateurs-routing.module';



@NgModule({
  declarations: [FormateursComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormateursRoutingModule,
    FormsModule
  ],
  bootstrap: [FormateursComponent],
  providers: [],

})
export class FormateursModule { }
