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
})
export class UserRoutingModule { }

export const routedComponents = [UserListComponent];
