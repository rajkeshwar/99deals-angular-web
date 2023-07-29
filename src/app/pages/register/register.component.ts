import { Component } from '@angular/core';
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
  selector: 'app-register',
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
  templateUrl: './register.component.html',

})
export class RegisterComponent {
  public formGroup!: FormGroup;
  public otpSent: boolean = false;

  constructor(private fb: FormBuilder, private router:Router) {
    this.formGroup = this.fb.group({
      mobile: ['', Validators.required],
      otp: ['', Validators.required],
      checked: [false, Validators.required],
    });
  }

  resendOtp() {
    console.log('Resend OTP')
  }

  onSubmit() {
    console.log('Register submit called');
    this.router.navigate(['/login']);
  }
}
