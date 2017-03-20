import { Component, Host, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationMessages } from './validation-messages';

@Component({
  selector: 'app-validation-messages',
  template: `<div *ngIf="errorMessage !== null" class='text-danger'>{{errorMessage}}</div>`
})

export class ValidationMessagesComponent {

  @Input() control: FormControl;
  @Input() label: string;
  constructor() { }

  get errorMessage() {
    let errors = this.control.errors;
    for (let propertyName in errors) {
      if (errors.hasOwnProperty(propertyName) && this.control.dirty) {
        if (errors[propertyName] === true) {
          return ValidationMessages.get(propertyName, this.label);
        } else {
          return this.messageWithProperties(errors, propertyName);
        }
      }
    }
    return null;
  }

  private messageWithProperties(errors, propertyName) {
    let properties = [];
    for (var key in errors[propertyName]) {
      properties.push(errors[propertyName][key]);
    }
    return ValidationMessages.get(propertyName, this.label, properties);
  }
}
