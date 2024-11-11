import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Practica1Page } from './practica1.page';

describe('Practica1Page', () => {
  let component: Practica1Page;
  let fixture: ComponentFixture<Practica1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Practica1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
