import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionContainer3Component } from './mission-container3.component';

describe('MissionContainer3Component', () => {
  let component: MissionContainer3Component;
  let fixture: ComponentFixture<MissionContainer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionContainer3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionContainer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
