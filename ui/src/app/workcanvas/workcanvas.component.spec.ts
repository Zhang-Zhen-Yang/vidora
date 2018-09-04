import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkcanvasComponent } from './workcanvas.component';

describe('WorkcanvasComponent', () => {
  let component: WorkcanvasComponent;
  let fixture: ComponentFixture<WorkcanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkcanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
