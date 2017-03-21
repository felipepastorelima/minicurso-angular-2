import { UserFormComponent } from './user-form/user-form.component';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    UserRoutingModule,
  ],
  exports: [],
  declarations: [
    UserListComponent,
    UserFormComponent,
  ],
  providers: [
    UserService,
  ],
})
export class UserModule { }
