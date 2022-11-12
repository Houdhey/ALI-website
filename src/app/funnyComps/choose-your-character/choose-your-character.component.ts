import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-your-character',
  templateUrl: './choose-your-character.component.html',
  styleUrls: ['./choose-your-character.component.scss'],
})
export class ChooseYourCharacterComponent implements OnInit {
  constructor() {}

  abdel = false;
  pickCharacter(name) {
    switch (name) {
      case 'abdel':
        this.abdel = true;
        break;

      default:
        this.abdel = false;
        break;
    }
  }
  ngOnInit(): void {
    console.clear();

    const characterList = document.querySelectorAll('.character');

    characterList.forEach((character) => {
      character.addEventListener('click', () => {
        if (document.querySelector('.character.active')) {
          document.querySelector('.character.active').classList.remove('active');
        }
        character.classList.add('active');
      });
    });
  }
}
