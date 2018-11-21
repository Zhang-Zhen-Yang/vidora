import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCategoryItemComponent } from './image-category-item.component';

describe('ImageCategoryItemComponent', () => {
  let component: ImageCategoryItemComponent;
  let fixture: ComponentFixture<ImageCategoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCategoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
