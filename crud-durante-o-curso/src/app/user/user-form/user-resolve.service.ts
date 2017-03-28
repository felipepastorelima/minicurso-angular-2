import { UserService } from '../user.service';
import { Observable } from 'rxjs/Rx';
import { User } from '../user';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class UserResolve implements Resolve<User>{

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): User | Observable<User> | Promise<User> {
    const id = route.params['id'];

    if (!id) {
      return Promise.resolve(
        new User()
      );
    }

    return this.userService.find(id).then((user) => {
      if (user) {
        return user;
      } else {
        this.router.navigate(['/user']);
        return null;
      }
    });
  }

}
