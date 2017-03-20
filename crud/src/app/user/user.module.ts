import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    SharedModule,
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
