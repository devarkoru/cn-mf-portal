import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilGamerComponent } from './perfil-gamer.component';

describe('PerfilGamerComponent', () => {
  let component: PerfilGamerComponent;
  let fixture: ComponentFixture<PerfilGamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilGamerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
