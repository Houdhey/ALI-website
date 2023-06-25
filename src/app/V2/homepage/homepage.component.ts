import { Component, HostListener, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VariableStateService } from '../../services/variable-state.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private http: HttpClient, public variableStateService: VariableStateService, private router: Router) {}
  modalOpened;

  public innerWidth: any;
  ngOnInit(): void {}

  navigateTo(url) {
    this.router.navigateByUrl(url);
  }

  sendEmail() {
    const mailApi = 'https://formspree.io/f/xwkzpdow';
    const emailValue = document.getElementById('emailToSend') as HTMLInputElement;
    console.log('button clicked for this email ', emailValue.value);

    let headers = new HttpHeaders({
      Accept: 'application/json',
    });
    this.http.post(mailApi, { email: emailValue.value }, { headers: headers }).subscribe(
      (response) => {
        console.log('response ' + response);
      },
      (error) => console.log('error ' + error)
    );
  }

  openForm() {
    this.variableStateService.formDoneButton = false;
    console.log('opening form ');
    let modal_wrapper2 = document.getElementById('modal_wrapper2');
    modal_wrapper2.classList.add('active');
    this.modalOpened = true;
  }

  closeForm() {
    let modal_wrapper2 = document.getElementById('modal_wrapper2');
    modal_wrapper2.classList.remove('active');
    this.modalOpened = false;
  }
}
