import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [],
  exports: [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [],
  providers: [],
})
export class SharedModule { }
