import { UserResolve } from './user-form/user-resolve.service';
import { UserFormComponent } from './user-form/user-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: 'new',
        component: UserFormComponent,
        resolve: {
          user: UserResolve,
        }
      },
      {
        path: ':id/edit',
        component: UserFormComponent,
        resolve: {
          user: UserResolve,
        }
      },
      {
        path: '',
        component: UserListComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    UserResolve,
  ]
})
export class UserRoutingModule { }
