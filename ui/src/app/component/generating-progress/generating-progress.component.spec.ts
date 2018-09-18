import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratingProgressComponent } from './generating-progress.component';

describe('GeneratingProgressComponent', () => {
  let component: GeneratingProgressComponent;
  let fixture: ComponentFixture<GeneratingProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratingProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratingProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
