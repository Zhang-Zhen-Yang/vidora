import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNoticeComponent } from './content-notice.component';

describe('ContentNoticeComponent', () => {
  let component: ContentNoticeComponent;
  let fixture: ComponentFixture<ContentNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
