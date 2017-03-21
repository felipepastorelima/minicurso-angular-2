import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html'
})
export class UserFormComponent implements OnInit {

  loading = false;
  user: User;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.forEach((data: {user: User}) => {
      this.user = data.user;

      this.form = this.formBuilder.group({
        'name': [this.user.name, Validators.required],
      });
    });
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    this.user.name = this.form.value.name;

    this.loading = true;

    if (!this.user.id) {
      this.userService.create(this.user).then(() => {
        this.router.navigate(['/user']);
        this.loading = false;
      }).catch((error) => {
        console.error(error);
        this.loading = false;
      });
    }else {
      this.userService.update(this.user).then(() => {
        this.router.navigate(['/user']);
        this.loading = false;
      }).catch((error) => {
        console.error(error);
        this.loading = false;
      });
    }
  }
}
