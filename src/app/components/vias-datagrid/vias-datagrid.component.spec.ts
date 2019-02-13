import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViasDatagridComponent } from './vias-datagrid.component';

describe('ViasDatagridComponent', () => {
  let component: ViasDatagridComponent;
  let fixture: ComponentFixture<ViasDatagridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViasDatagridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViasDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
