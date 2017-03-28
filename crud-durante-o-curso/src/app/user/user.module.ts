import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './user.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
  ],
  exports: [],
  declarations: [
    UserListComponent,
    UserFormComponent,
    UserDetailsComponent,
  ],
  providers: [
    UserService,
  ],
})
export class UserModule { }
