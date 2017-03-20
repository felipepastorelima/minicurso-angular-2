import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {

  visible: boolean = false;

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

}
