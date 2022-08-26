import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss'],
})
export class TestpageComponent implements OnInit {
  constructor() {}

  public innerWidth: any;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.resizeImage();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.innerWidth = event.target.innerWidth;
    console.log('width actuel : ' + this.innerWidth);
  }
  resizeImage() {
    const myId = document.getElementById('myFlexContainer');
    if (this.innerWidth < 993) {
      console.log('resizing image');

      // @ts-ignore
      myId.style.flexDirection = 'column';
    } else {
      // @ts-ignore
      myId.style.flexDirection = 'row';
    }
  }
}
