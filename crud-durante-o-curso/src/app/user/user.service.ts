import { User } from './user';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
  ) { }

  list(): Promise<Array<User>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.http
          .get(`${environment.apiUrl}/users`)
          .toPromise()
          .then(response => {
            resolve(User.fromJSONList(response.json()));
          }).catch(err => reject(err));
      }, 500);
    });
  }

  find(id: number) {
    return this.http
      .get(`${environment.apiUrl}/users/${id}`)
      .toPromise()
      .then(response => {
        return User.fromJSON(response.json());
      });
  }

  save(user: User) {
    if (user.id) {
      return this.update(user);
    } else {
      return this.create(user);
    }
  }

  private update(user: User) {
    return this.http
      .put(
        `${environment.apiUrl}/users/${user.id}`,
        user,
      )
      .toPromise()
      .then(response => {
        return User.fromJSON(response.json());
      });
  }

  private create(user: User) {
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
