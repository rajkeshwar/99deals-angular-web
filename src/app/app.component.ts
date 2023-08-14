import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ButtonModule, CommonModule, RouterModule, ImageModule, FormsModule],
})
export class AppComponent {
  title = '99deals-angular-web';

  routeLinks = ['login', 'register', 'deals', 'deals-discount'];

  // images = [
  //   {
  //     imageSrc:
  //     "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
  //       imageAlt: 'nature1',
  //   },
  //   {
  //     imageSrc:
  //     "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
  //     imageAlt: 'nature2',
  //   },
  //   {
  //     imageSrc:
  //     "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
  //     imageAlt: 'person1',
  //   },
  //   {
  //     imageSrc:
  //     "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
  //     imageAlt: 'person2',
  //   },
  // ]
}
