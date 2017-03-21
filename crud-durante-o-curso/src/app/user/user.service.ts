import { environment } from '../../environments/environment';
import { User } from './user';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
  ) { }

  list(): Promise<Array<User>> {
    return this.http
      .get(`${environment.apiUrl}/users`)
      .toPromise()
      .then(response => {
        return User.fromJSONList(response.json());
      });
  }

}
