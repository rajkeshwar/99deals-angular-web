import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
      ButtonModule,
      CommonModule,
      RouterModule
    ]
})
export class AppComponent {
  title = '99deals-angular-web';

  routeLinks = ['login', 'register', 'deals'];
}
