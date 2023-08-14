import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
  ],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  public formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formGroup = this.fb.group({
      mobile: ['', Validators.required],
      checked: [false, Validators.required],
    });
  }

  onSubmit() {
    console.log('Submit called');
    this.router.navigate(['/deals']);
  }
}
