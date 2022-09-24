import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-your-character',
  templateUrl: './choose-your-character.component.html',
  styleUrls: ['./choose-your-character.component.scss'],
})
export class ChooseYourCharacterComponent implements OnInit {
  constructor() {}

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
