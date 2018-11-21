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
  // 当前进度
  value() {
    // return 50;
    const cTime = this.ffmpegService.current.split(':').reverse();
    let cTimeNum = 0;
    cTime.forEach((item, index)=>{
      cTimeNum += parseFloat(item) * Math.pow(60, index)
    })
    return cTimeNum / this.cTimeNum() *100;
  }
  cTimeNum() {
    const dTime = this.ffmpegService.duration.split(':').reverse();
    let dTimeNum = 0;
    dTime.forEach((item, index)=>{
      dTimeNum += parseFloat(item) * Math.pow(60, index)
    })
    return dTimeNum;
  }
  // 当前时间 -----------------------------------------------------------------------------
  current() {
    return this.ffmpegService.current;
  }
  // 持续时间 -----------------------------------------------------------------------------
  duration() {
    return this.ffmpegService.duration;
  }

}
