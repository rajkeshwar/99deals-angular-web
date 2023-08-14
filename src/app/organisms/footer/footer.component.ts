import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterBoxComponent, SocialBoxComponent } from 'src/app/molecules';
import { makeLinks } from 'src/app/utils/utils';

import {
  beverages,
  categories,
  getInTouch,
  quickLinks,
} from 'src/app/utils/constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterBoxComponent, SocialBoxComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public categories = makeLinks(categories);
  public beverages = makeLinks(beverages);
  public quickLinks = makeLinks(quickLinks);
  public getInTouch = makeLinks(getInTouch);
}
