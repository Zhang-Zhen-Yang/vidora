import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateTemplateItemComponent } from './animate-template-item.component';

describe('AnimateTemplateItemComponent', () => {
  let component: AnimateTemplateItemComponent;
  let fixture: ComponentFixture<AnimateTemplateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateTemplateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateTemplateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
