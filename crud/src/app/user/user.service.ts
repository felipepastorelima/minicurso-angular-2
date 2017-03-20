import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { User } from "app/user/user";

@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  list(): Promise<Array<User>> {
    return this.http
      .get(`${environment.apiUrl}/users`)
      .toPromise()
      .then(response => {
        return User.fromJSONList(response.json());
      });
  }

  find(id: number | string) {
    let url = `${environment.apiUrl}/users/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => User.fromJSON(response.json()));
  }

  save(user: User): Promise<User> {
    if (user.id) {
      return this.update(user);
    }else {
      return this.create(user);
    }
  }

  delete(id: number | string): Promise<void> {
    let url = `${environment.apiUrl}/users/${id}`;
    return this.http
      .delete(url)
      .toPromise()
      .then(() => null);
  }

  private create(user: User): Promise<User> {
    return this.http
      .post(
        `${environment.apiUrl}/users`,
        JSON.stringify(user),
        { headers: this.headers },
      )
      .toPromise()
      .then(res => User.fromJSON(res.json()));
  }

  private update(user: User): Promise<User> {
    const url = `${environment.apiUrl}/users/${user.id}`;
    return this.http
      .put(
        url,
        JSON.stringify(user),
        { headers: this.headers },
      )
      .toPromise()
      .then(res => User.fromJSON(res.json()));
  }
}
