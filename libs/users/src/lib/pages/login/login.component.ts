import { LocalstorageService } from './../../services/localstorage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'users-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginFormGroup: any = FormGroup;
  isSubmitted = false;
  authError = false;
  authMessage = "Email or password are wrong!";

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private localstorage: LocalstorageService) { }

  ngOnInit(): void {
    this._initLoginForm();
  }

  private _initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.loginFormGroup.invalid) return;

    this.auth.login(this.loginForm.email.value, this.loginForm.password.value).subscribe(
      (user) => {
        this.authError = false;
        this.localstorage.setItem(user.token);

          this.router.navigate(['/']).then(() => {
            window.location.reload();
          });

      }, (err: HttpErrorResponse) => {
        console.log(err);
        this.authError = true;

        if (err.status !== 400) {
          this.authMessage = "Error in the server, please try again later."
        }
      })

  }

  get loginForm() {
    return this.loginFormGroup.controls;
  }
}
