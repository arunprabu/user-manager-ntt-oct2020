import { Component, ViewEncapsulation } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root', // exposing the comp in an element selector
  templateUrl: './app.component.html', // html -- should be only one -- mandatory
  styleUrls: ['./app.component.css'] // css -- many -- optional
})
export class AppComponent {
  // ts
  title = 'user-manager-ntt-oct2020';
}
