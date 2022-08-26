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
    this.resizeImage();
  }
  resizeImage() {
    const myId = document.getElementById('myFlexContainer');
    const flexContainer1 = document.getElementById('flexContainer1');

    const customContainerRight = document.getElementById(
      'customContainerRight'
    );
    const carImage = document.getElementById('carImage');
    const carImage2 = document.getElementById('carImage2');
    const carImage3 = document.getElementById('carImage3');
    if (this.innerWidth < 993) {
      console.log('resizing image');

      myId!.style.flexDirection = 'column';

      flexContainer1!.style.marginLeft = '0px';

      customContainerRight!.style.visibility = 'none';
      customContainerRight!.style.marginLeft = '0px';

      carImage!.style.width = '100%';
      carImage!.style.height = '100%';
      carImage!.style.marginLeft = '0px';

      carImage3!.style.width = '100%';
      carImage3!.style.height = '100%';
      carImage3!.style.marginLeft = '0px';
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
    }
  }
}
