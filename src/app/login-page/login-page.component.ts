import { Component, OnInit } from '@angular/core';

import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

let sign_in_btn;
let sign_up_btn;
let container: HTMLElement | null;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor() {}
  google = faGoogle;
  linkedin = faLinkedinIn;
  ngOnInit(): void {
    sign_in_btn = document.querySelector('#sign-in-btn');
    sign_up_btn = document.querySelector('#sign-up-btn');
    container = document.querySelector('.myContainer');
    console.log(container);
  }

  addSignUpMode() {
    // @ts-ignore
    container.classList.add('sign-up-mode');
  }
  removeSignUpMode() {
    console.log('go to sign in');
    // @ts-ignore
    container.classList.remove('sign-up-mode');
  }
}
