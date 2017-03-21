import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { HighlightDirective } from "app/user/highlight.directive";

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
  ],
  exports: [],
  declarations: [
    UserListComponent,
    UserFormComponent,
    HighlightDirective,
  ],
  providers: [
    UserService,
  ],
})
export class UserModule { }
