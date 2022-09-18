import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-mission-page',
  templateUrl: './mission-page.component.html',
  styleUrls: ['./mission-page.component.scss'],
})
export class MissionPageComponent implements OnInit {
  constructor(private router: Router) {}

  modalOpened;

  openMenu() {
    $('.header-area .nav').slideToggle(200);
    $('.menu-trigger').toggleClass('active');
  }
  goToHome() {
    this.router.navigateByUrl('/homepage');
  }
  ngOnInit(): void {
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

  openForm() {
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
}
