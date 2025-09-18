import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="signin-form-container">
      <form [formGroup]="signinForm" (ngSubmit)="signin()" class="signinform">
        <h1> Sign in to your account </h1>
        <fieldset>
          <legend>User Sign In</legend>
          <label for="email">Email</label>
          <input formControlName="email" type="email" id="email" name="email" />
          @if (signinForm.controls['email'].touched &&
          signinForm.controls['email'].hasError('required')) {
          <small class="error">Email is required.</small>
          } @if (signinForm.controls['email'].touched &&
          signinForm.controls['email'].hasError('email')) {
          <small class="error">Invalid email address.</small>
          }
          <label for="password">Password</label>
          <input formControlName="password" id="password" type="password" />
          @if (signinForm.controls['password'].touched &&
          signinForm.controls['password'].hasError('required')) {
          <small class="error">Password is required.</small>
          } @if (signinForm.controls['password'].touched &&
          signinForm.controls['password'].hasError('pattern')) {
          <small class="error"
            >Password must be at least 8 characters long and contain at least
            one uppercase letter and one number.</small
          >
          }
          <button type="submit" class="formBtn" [disabled]="!signinForm.valid" value="Sign In"> Sign In</button>
        </fieldset>
      </form>
    </div>
  `,
  styles: `
    .signin-form-container {
        display: flex;
        justify-content: center;

        margin: 5rem auto;
    }
    .signinform{
      width: 600px;
    }

    legend, label {
      font-family: 'Merriweather', serif;
    }
    label, input {
      display: block;
    }
    label{
      margin-top: 2rem;
    }
    input{
      padding: 10px;
      box-sizing: border-box;

    }
    input[type="email"], input[type="password"] { width:
      100%;
    }
    .error {
      color: #90ee90;
    }
    .formBtn {
      background-color: #90ee90;
      border: none;
      color: black;
      font-family: 'Lato', sans-serif;
      font-size: 15px;
      cursor: pointer;
      font-weight: bold;
      padding: .6rem 1rem;
      float: right;
      margin: 2rem 0;
    }
    .formBtn:hover { filter: brightness(.8);
    }
  `
})
export class SigninComponent {
  signinForm: FormGroup = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [null, Validators.compose([Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/)])]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ){}
  signin(){
    const email = this.signinForm.controls['email'].value;
    const password = this.signinForm.controls['password'].value;

    if(this.authService.signin(email, password)){
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigate([returnUrl]);
    }else{
      alert('Invalid email or password. Please try again.');
    }
  }
}
