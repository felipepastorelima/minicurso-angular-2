import { UserFormResolve } from './user-form/user-form-resolve.service';
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
          user: UserFormResolve,
        }
      },
      {
        path: ':id/edit',
        component: UserFormComponent,
        resolve: {
          user: UserFormResolve,
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
    UserFormResolve
  ]
})
export class UserRoutingModule { }

export const routedComponents = [UserListComponent];
