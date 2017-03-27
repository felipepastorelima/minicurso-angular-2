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
}
