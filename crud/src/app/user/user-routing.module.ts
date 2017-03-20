import { UserFormComponent } from './user-form/user-form.component';
import { UserFormResolve } from './user-form/user-form-resolve.service';
import { UserListResolve } from './user-list/user-list-resolve.service';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent }   from './user-list/user-list.component';
null

const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: ':id/edit',
        component: UserFormComponent,
        resolve: {
          user: UserFormResolve,
        },
      },
      {
        path: 'new',
        component: UserFormComponent,
        resolve: {
          user: UserFormResolve,
        },
      },
      {
        path: '',
        component: UserListComponent,
        resolve: {
          users: UserListResolve,
        },
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [
    UserListResolve,
    UserFormResolve,
  ],
  exports: [
    RouterModule,
  ]
})
export class UserRoutingModule {}
