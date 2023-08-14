import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    BadgeModule,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public searchText!: string;
}
