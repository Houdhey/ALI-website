import { Component, HostListener, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VariableStateService } from '../services/variable-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss'],
})
export class TestpageComponent implements OnInit {
  constructor(private http: HttpClient, public variableStateService: VariableStateService, private router: Router) {}
  modalOpened;

  public innerWidth: any;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.resizeImage();
    setInterval(function () {
      const show = document.querySelector('.word-apple[data-show]');
      const next = show.nextElementSibling || document.querySelector('.word-apple:first-child');
      const up = document.querySelector('.word-apple[data-up]');

      if (up) {
        up.removeAttribute('data-up');
      }

      show.removeAttribute('data-show');
      show.setAttribute('data-up', '');

      next.setAttribute('data-show', '');
    }, 2500);
  }

  scrollToId(id) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.innerWidth = event.target.innerWidth;
    console.log('width actuel : ' + this.innerWidth);
    this.resizeImage();
  }

  goToMissions() {
    this.router.navigateByUrl('/missions');
  }

  makeItSmile() {
    const avatar = document.getElementById('avatarContactButton').style;
    const container = document.getElementById('contactContainer').style;
    avatar.backgroundImage = 'url("../../assets/images/icons/goodbye.png")';
    container.cursor = 'pointer';
  }

  makeItCry() {
    const avatar = document.getElementById('avatarContactButton').style;
    const container = document.getElementById('contactContainer').style;
    avatar.backgroundImage = 'url("../../assets/images/icons/crying.png")';
    container.cursor = 'none';
  }

  resizeImage() {
    const myId = document.getElementById('myFlexContainer');
    const flexContainer1 = document.getElementById('flexContainer1');

    const customContainerRight = document.getElementById('customContainerRight');
    const carImage = document.getElementById('carImage');
    const carImage2 = document.getElementById('carImage2');
    const carImage3 = document.getElementById('carImage3');
    if (this.innerWidth < 993) {
      console.log('resizing image');

      myId!.style.flexDirection = 'column';
      myId!.style.alignItems = 'center';

      flexContainer1!.style.marginLeft = '0px';

      customContainerRight!.style.visibility = 'none';
      customContainerRight!.style.marginLeft = '0px';

      carImage!.style.width = '100%';
      carImage!.style.height = '100%';
      carImage!.style.marginLeft = '0px';

      carImage3!.style.width = '100%';
      carImage3!.style.height = '100%';
      carImage3!.style.marginLeft = '0px';

      document.getElementById('bigTitle').style.fontSize = '60px';
      document.getElementById('bigTitle').style.marginLeft = '0px';

      document.getElementById('section3part1').style.flexDirection = 'column';
      document.getElementById('section3part2').style.flexDirection = 'column';
      document.getElementById('section3part2Div1').style.marginLeft = '50px';
      document.getElementById('section3part3').style.flexDirection = 'column';
    } else {
      myId!.style.flexDirection = 'row';

      flexContainer1!.style.marginLeft = '80px';

      customContainerRight!.style.visibility = 'visible';

      carImage!.style.width = '1100px';
      carImage!.style.height = '1100px';
      carImage!.style.marginLeft = '-300px';

      carImage3!.style.width = '1100px';
      carImage3!.style.height = '1100px';
      carImage3!.style.marginLeft = '-300px';

      document.getElementById('bigTitle').style.fontSize = '80px';
      document.getElementById('bigTitle').style.marginLeft = '-100px';

      document.getElementById('section3part1').style.flexDirection = 'row';
      document.getElementById('section3part2').style.flexDirection = 'row';
      document.getElementById('section3part2Div1').style.marginLeft = '200px';
      document.getElementById('section3part3').style.flexDirection = 'row';
    }
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
