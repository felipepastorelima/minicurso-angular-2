import { UserFormComponent } from './user-form/user-form.component';
import { UserResolve } from './user-form/user-resolve.service';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmGuard } from 'app/user/confirm.guard';

const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: 'new',
        component: UserFormComponent,
        canActivate: [ConfirmGuard],
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
    ConfirmGuard,
  ]
})
export class UserRoutingModule { }
