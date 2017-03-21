import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users: Array<User>;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.userService
      .list()
      .then((users) => {
      this.users = users;
    });
  }

  edit(id: string) {
    this.router.navigate(['user', id, 'edit']);
  }

}
