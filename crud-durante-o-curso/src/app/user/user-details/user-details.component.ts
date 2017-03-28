import { User } from '../user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.component.html'
})

export class UserDetailsComponent implements OnInit {

  @Output() userChanged = new EventEmitter<User>();
  @Input() user;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.userChanged.emit(this.user);
    }, 5000);
  }

}
