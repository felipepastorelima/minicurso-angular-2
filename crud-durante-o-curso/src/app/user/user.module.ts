import { SharedModule } from '../shared/shared.module';
import { UserService } from './user.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    UserListComponent,
  ],
  declarations: [
    UserListComponent,
  ],
  providers: [
    UserService,
  ],
})
export class UserModule { }
