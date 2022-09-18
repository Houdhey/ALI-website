import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-page',
  templateUrl: './mission-page.component.html',
  styleUrls: ['./mission-page.component.scss'],
})
export class MissionPageComponent implements OnInit {
  constructor(private router: Router) {}

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
}
