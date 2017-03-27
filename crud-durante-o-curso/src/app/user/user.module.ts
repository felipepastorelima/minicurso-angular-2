import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    UserListComponent,
  ],
  declarations: [
    UserListComponent,
  ],
  providers: [],
})
export class UserModule { }
