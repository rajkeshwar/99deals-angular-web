import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-box',
  standalone: true,
  imports: [RouterModule, NgFor],
  template: `
    <div class="py-8 text-xs">
      <h3 class="font-semibold uppercase text-gray-500">{{ title }}</h3>
      <div class="text-xs">
        <ul class="mt-2">
          <li class="py-1" *ngFor="let link of items">
            <a [routerLink]="link.route">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class FooterBoxComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) items!: any[];
}
