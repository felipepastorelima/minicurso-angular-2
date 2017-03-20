import { UserService } from '../user.service';
import { User } from '../user';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class UserFormResolve implements Resolve<User> {
  constructor(
    private service: UserService,
    private router: Router,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<User> {
    let id = route.params['id'];

    if (!id) {
      return Promise.resolve(
        new User()
      );
    }

    return this.service.find(id).then(user => {
      if (user) {
        return user;
      } else {
        this.router.navigate(['/user']);
        return null;
      }
    });
  }
}
