import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.component.html'
})
export class UserDetailsComponent implements OnInit {
  @Input() user;
  @Output() userChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
    /*
    setTimeout(() => {
      this.userChanged.emit(this.user);
    }, 2000);
    */
  }
}
