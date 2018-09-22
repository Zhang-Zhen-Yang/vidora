import { Component, OnInit } from '@angular/core';
import { FfmpegService } from '../../service/ffmpeg.service'

@Component({
  selector: 'app-transforming-progress',
  templateUrl: './transforming-progress.component.html',
  styleUrls: ['./transforming-progress.component.scss']
})
export class TransformingProgressComponent implements OnInit {

  constructor(private ffmpegService: FfmpegService) { }

  ngOnInit() {
  }
  value() {
    return 50;
  }
  current() {
    return this.ffmpegService.current;
  }
  duration() {
    return this.ffmpegService.duration;
  }

}
