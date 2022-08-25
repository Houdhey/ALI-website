import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss'],
})
export class TestpageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  resizeImage() {
    const id = document.getElementById('homeImageToResize');
    console.log('ecran actuel ? ' + window.screen.width);
    if (window.screen.width < 778) {
      console.log('resizing image ');
      /*      // @ts-ignore
      id.style.width = '800px';*/
      // @ts-ignorep
      id.style.height = '800px';
    } else {
      /*      // @ts-ignore
      id.style.width = '2000px';*/
      // @ts-ignore
      id.style.height = '2000px';
    }
  }
}
