import { Router } from '@angular/router';
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
  ) { }

  ngOnInit() {
    this.user = new User();

    this.form = this.formBuilder.group({
      'name': [this.user.name, Validators.required],
    });
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    this.user.name = this.form.value.name;

    this.loading = true;
    this.userService.create(this.user).then(() => {
      this.router.navigate(['/user']);
      this.loading = false;
    }).catch((error) => {
      console.error(error);
      this.loading = false;
    });
  }
}
