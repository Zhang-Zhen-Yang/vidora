import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateTemplateComponent } from './animate-template.component';

describe('AnimateTemplateComponent', () => {
  let component: AnimateTemplateComponent;
  let fixture: ComponentFixture<AnimateTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
