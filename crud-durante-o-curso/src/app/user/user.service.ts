import { environment } from '../../environments/environment';
import { User } from './user';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});

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

  create(user: User): Promise<Array<User>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.http
          .post(
            `${environment.apiUrl}/users`,
            user,
            { headers: this.headers }
          )
          .toPromise()
          .then(response => {
            resolve(User.fromJSON(response.json()));
          }).catch(error => reject(error));
      }, 1000);
    });

  }

}
