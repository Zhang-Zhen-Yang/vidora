import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformingProgressComponent } from './transforming-progress.component';

describe('TransformingProgressComponent', () => {
  let component: TransformingProgressComponent;
  let fixture: ComponentFixture<TransformingProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformingProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformingProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
