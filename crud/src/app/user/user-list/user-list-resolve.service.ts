import { UserService } from '../user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from "app/user/user";

@Injectable()
export class UserListResolve implements Resolve<Array<User>> {

  constructor(private service: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    return this.service.list();
  }

}
