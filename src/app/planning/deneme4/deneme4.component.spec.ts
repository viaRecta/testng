import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deneme4Component } from './deneme4.component';

describe('Deneme4Component', () => {
  let component: Deneme4Component;
  let fixture: ComponentFixture<Deneme4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deneme4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deneme4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
