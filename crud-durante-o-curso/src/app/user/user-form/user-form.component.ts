import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html'
})
export class UserFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'name': ['', Validators.required],
      'lastName': [''],
    });
  }

  save() {
    debugger;

    if (!this.form.valid) {
      return;
    }

    console.log(this.form.value);
  }
}
