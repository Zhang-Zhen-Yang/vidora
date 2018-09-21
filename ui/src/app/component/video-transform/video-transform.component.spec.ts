import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTransformComponent } from './video-transform.component';

describe('VideoTransformComponent', () => {
  let component: VideoTransformComponent;
  let fixture: ComponentFixture<VideoTransformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTransformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
