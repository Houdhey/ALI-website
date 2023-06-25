import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apple-title',
  templateUrl: './apple-title.component.html',
  styleUrls: ['./apple-title.component.scss'],
})
export class AppleTitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setInterval(function () {
      const show = document.querySelector('.word-apple-home[data-show]');
      const next = show.nextElementSibling || document.querySelector('.word-apple-home:first-child');
      const up = document.querySelector('.word-apple-home[data-up]');
      if (up) {
        up.removeAttribute('data-up');
      }
      show.removeAttribute('data-show');
      show.setAttribute('data-up', '');
      next.setAttribute('data-show', '');
    }, 2500);
  }
}
