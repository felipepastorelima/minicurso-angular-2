import { User } from './user';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
  ) { }

  list() {
    return this.http
      .get(`${environment.apiUrl}/users`)
      .toPromise()
      .then(response => {
        return User.fromJSONList(response.json());
      });
  }

  create(user: User) {
    return this.http
      .post(
        `${environment.apiUrl}/users`,
        user,
      )
      .toPromise()
      .then(response => {
        return User.fromJSON(response.json());
      });
  }

}
