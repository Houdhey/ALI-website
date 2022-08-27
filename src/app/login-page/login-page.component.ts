import { Component, OnInit } from '@angular/core';

import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginData } from '../interfaces/login-data.interface';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { EMAIL_VALIDATOR } from '../utilities/validators';

let sign_in_btn;
let sign_up_btn;
let container: HTMLElement | null;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  google = faGoogle;
  linkedin = faLinkedinIn;

  formGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.pattern(EMAIL_VALIDATOR),
      Validators.required,
    ]),
  });
  inscriptionForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.pattern(EMAIL_VALIDATOR),
      Validators.required,
    ]),
  });

  ngOnInit(): void {
    sign_in_btn = document.querySelector('#sign-in-btn');
    sign_up_btn = document.querySelector('#sign-up-btn');
    container = document.querySelector('.myContainer');
    console.log(container);
  }

  enableNextButton(): boolean {
    return this.formGroup.invalid;
  }

  addSignUpMode() {
    container!.classList.add('sign-up-mode');
  }
  removeSignUpMode() {
    console.log('go to sign in');
    container!.classList.remove('sign-up-mode');
  }

  loginWithCredentials() {
    this.authService
      .login({
        email: this.formGroup.get('email')!.value!,
        password: this.formGroup!.get('password')!.value!,
      })
      .then((result) => {
        console.log(
          'result for these data ' +
            this.formGroup.get('email')!.value! +
            ' ' +
            this.formGroup!.get('password')!.value! +
            result
        );
        this.router.navigateByUrl('/dashboard');
      })
      .catch((error) => console.log('error login with credentials ' + error));
  }
}
