import { SpinnerService } from './spinner/spinner.service';
import { Router, Event as RouterEvent, NavigationStart, NavigationError, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  constructor(
    private spinner: SpinnerService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
        this.spinner.show();
    }
    if (event instanceof NavigationEnd) {
        this.spinner.hide();
    }
    if (event instanceof NavigationError) {
        this.spinner.hide();
    }
  }

}
