import { ValidationMessagesComponent } from './validation/validation-messages.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ValidationMessagesComponent,
  ],
  declarations: [
    ValidationMessagesComponent,
  ],
  providers: [],
})
export class SharedModule { }
