import { Component } from '@angular/core';
import { AppStoreIcon, GooglePlayIcon } from '../atoms';

@Component({
  selector: 'app-social-box',
  standalone:true,
  imports: [AppStoreIcon, GooglePlayIcon],
  template: `
    <div class="py-8 text-xs">
      <h3 class="font-semibold uppercase text-gray-500 mb-4">Follow Us on</h3>
      <div class="flex flex-1 mb-4">
        <i class="mr-8 pi pi-facebook"></i>
        <i class="mr-8 pi pi-twitter"></i>
        <i class="mr-8 pi pi-google"></i>
      </div>
      <h3 class="font-semibold mb-4">Download the app</h3>
      <div class="mb-2">
        <app-store-icon />
      </div>
      <div>
        <google-play-icon />
      </div>
    </div>
  `,
})
export class SocialBoxComponent {}
