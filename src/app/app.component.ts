import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare const gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if ( event instanceof NavigationEnd ) {
        gtag('config', 'UA-57672249-3', {'page_path': event.urlAfterRedirects});
      }
    })
  }
}
