import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfirmGuard implements CanActivate {
  canActivate() {
    return confirm('Tem certeza?');
  }
}
