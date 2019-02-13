import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deneme3Component } from './deneme3.component';

describe('Deneme3Component', () => {
  let component: Deneme3Component;
  let fixture: ComponentFixture<Deneme3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deneme3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deneme3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
