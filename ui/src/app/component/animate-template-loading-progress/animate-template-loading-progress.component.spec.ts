import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateTemplateLoadingProgressComponent } from './animate-template-loading-progress.component';

describe('AnimateTemplateLoadingProgressComponent', () => {
  let component: AnimateTemplateLoadingProgressComponent;
  let fixture: ComponentFixture<AnimateTemplateLoadingProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateTemplateLoadingProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateTemplateLoadingProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
