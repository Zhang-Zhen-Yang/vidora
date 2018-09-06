import { TestBed, inject } from '@angular/core/testing';

import { FfmpegService } from './ffmpeg.service';

describe('FfmpegService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FfmpegService]
    });
  });

  it('should be created', inject([FfmpegService], (service: FfmpegService) => {
    expect(service).toBeTruthy();
  }));
});
