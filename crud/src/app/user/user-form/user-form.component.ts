import { User } from '../user';
import { UserService } from '../user.service';
import { CustomValidators } from '../../shared/validation/custom-validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html'
})
export class UserFormComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  editing: boolean = false;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: UserService,
  ) { }

  ngOnInit() {
    this.route.data.forEach(
      (data: {
        user: User,
      }) => {
        this.user = data.user;
        this.editing = !!this.user && !!this.user.id;
        this.buildFormFor(this.user);
      }
    );
  }

  get title() {
    if (this.editing) {
      return 'Edit User';
    }
    return 'New User';
  }

  buildFormFor(user: User) {
    this.form = this.formBuilder.group({
      'name': [
        user.name || '',
        [ Validators.required, Validators.maxLength(255) ]
      ]
    });
  }

  save() {
    this.loading = true;

    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).markAsDirty();
    });

    if (!this.form.valid) {
      this.loading = false;
      return;
    }

    this.user.name = this.form.get('name').value;

    this.service.save(this.user).then(() => {
      this.loading = false;
      this.router.navigate(['/user']);
    }).catch((error) => {
      this.loading = false;
      console.error(error);
    });
  }

}
