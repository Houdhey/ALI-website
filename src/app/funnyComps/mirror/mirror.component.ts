import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.scss'],
})
export class MirrorComponent implements OnInit {
  current = 0;
  images = [
    'https://c.tenor.com/7IkaPDd926MAAAAC/zoro-one-piece.gif',
    'https://giffiles.alphacoders.com/491/49147.gif',
    'https://i.pinimg.com/originals/cc/ed/a8/cceda86d755eb57ec0c659664804896e.gif',
    'https://c.tenor.com/TAKwAxKgJfQAAAAd/roronoa-zoro-one-piece.gif',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMadpa9hcjCj0V7BztfGNWSr0-QPbTvJZo4dXb9XSkLLqy_yyN0Tscop9XvoGWqqNP58&usqp=CAU',
    'https://i.pinimg.com/originals/65/42/82/654282d11887bf79050f35d233776593.gif',
  ];

  constructor() {}

  clickMirror() {
    $('#mirror-content').css({
      'background-image': `url(${this.images[++this.current % this.images.length]})`,
    });
  }
  ngOnInit(): void {}
}
