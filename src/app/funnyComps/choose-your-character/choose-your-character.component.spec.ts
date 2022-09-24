import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseYourCharacterComponent } from './choose-your-character.component';

describe('ChooseYourCharacterComponent', () => {
  let component: ChooseYourCharacterComponent;
  let fixture: ComponentFixture<ChooseYourCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseYourCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseYourCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
