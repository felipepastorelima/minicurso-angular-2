import { AppStateService } from './app-state.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private appState: AppStateService,
  ) {
  }
}
