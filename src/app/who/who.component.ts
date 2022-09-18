import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss'],
})
export class WhoComponent implements OnInit {
  modalOpened;

  openMenu() {
    $('.header-area .nav').slideToggle(200);
    $('.menu-trigger').toggleClass('active');
  }
  constructor(private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setInterval(function () {
      const show = document.querySelector('.word-apple3[data-show]');
      const next = show.nextElementSibling || document.querySelector('.word-apple3:first-child');
      const up = document.querySelector('.word-apple3[data-up]');

      if (up) {
        up.removeAttribute('data-up');
      }

      show.removeAttribute('data-show');
      show.setAttribute('data-up', '');

      next.setAttribute('data-show', '');
    }, 2500);
  }
  navigateTo(url) {
    this.router.navigateByUrl(url);
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
