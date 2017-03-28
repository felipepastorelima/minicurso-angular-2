import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html'
})
export class UserFormComponent implements OnInit {
  user: User;
  form: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      if (params['id']) {
        const id = Number(params['id']);
        this.userService.find(id).then((user) => {
          this.user = user;
          this.buildForm();
        });
      } else {
        this.user = new User();
        this.buildForm();
      }
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      'name': [
        this.user.name,
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ]
    });
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    this.user.name = this.form.value.name;
    this.loading = true;
    this.userService
      .create(this.user)
      .then(() => {
        this.loading = false;
        this.router.navigate(['/user']);
      }).catch(err => {
        this.loading = false;
        console.error(err);
      });
  }

}
