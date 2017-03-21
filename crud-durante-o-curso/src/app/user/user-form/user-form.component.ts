import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html'
})
export class UserFormComponent implements OnInit {

  user: User;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
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

    // Envia user para o servidor
  }
}
