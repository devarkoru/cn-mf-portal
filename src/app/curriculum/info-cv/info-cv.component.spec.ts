import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCvComponent } from './info-cv.component';

describe('InfoCvComponent', () => {
  let component: InfoCvComponent;
  let fixture: ComponentFixture<InfoCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
