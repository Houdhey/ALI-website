import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionContainer2Component } from './mission-container2.component';

describe('MissionContainer2Component', () => {
  let component: MissionContainer2Component;
  let fixture: ComponentFixture<MissionContainer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionContainer2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionContainer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
