import { User } from '../user';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit {

  users: Array<User>;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService,
  ) { }

  ngOnInit() {
    this.route.data.forEach((data: {users : Array<User>}) => {
      this.users = data.users ;
    });
  }

  edit(id: number) {
    this.router.navigate(['/user', id, 'edit']);
  }

  delete(id: number) {
    this.loading = true;
    this.service.delete(id).then(() => {
      return this.service.list().then((users) => {
        this.users = users;
        this.loading = false;
      })
    }).catch((error) => {
      this.loading = false;
      console.error(error);
    });
  }

}
