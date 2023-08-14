import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-mega-menu-category',
  standalone:true,
  template: `
    <div
      class="bg-white mb-4 flex justify-center"
      [ngStyle]="{ boxShadow: '0 5px 10px -5px rgba(115,115,115,0.75)' }"
    >
      <p-megaMenu
        [model]="categories"
        styleClass="category-mega-menu"
      ></p-megaMenu>
    </div>
  `,
  imports:[CommonModule, MegaMenuModule],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .category-mega-menu {
        @apply max-w-screen-lg mx-auto bg-white border-none py-1 text-sm;

        .p-menuitem-link {
          padding: 0.45rem 1rem !important;
        }

        .p-megamenu-panel {
          position: fixed;
          width: 100%;
          left: calc((100% - 1024px) / 2);
          margin: 0 auto;
          @apply max-w-screen-lg text-sm;
        }
      }
    `,
  ],
})
export class MegaMenuCategoryComponent {
  @Input({ required: true }) categories: any = [];
}
