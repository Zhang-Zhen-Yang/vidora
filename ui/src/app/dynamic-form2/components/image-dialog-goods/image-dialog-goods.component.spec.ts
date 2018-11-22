import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDialogGoodsComponent } from './image-dialog-goods.component';

describe('ImageDialogGoodsComponent', () => {
  let component: ImageDialogGoodsComponent;
  let fixture: ComponentFixture<ImageDialogGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDialogGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDialogGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
