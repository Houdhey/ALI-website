import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleTitleComponent } from './apple-title.component';

describe('AppleTitleComponent', () => {
  let component: AppleTitleComponent;
  let fixture: ComponentFixture<AppleTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
