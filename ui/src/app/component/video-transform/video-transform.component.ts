import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VideoType } from './videoType';
import { FfmpegService } from '../../service/ffmpeg.service'
/*
ffmpeg常用参数的介绍
-i 指定要转换视频的源文件
-s 视频转换后视频的分辨率
-vcodec 视频转换时使用的编解码器
-r 视频转换换的桢率(默认25桢每秒)
-b 视频转换换的bit率
-ab 音频转换后的bit率(默认64k)
-acodec 制度音频使用的编码器
-ac 制定转换后音频的声道
-ar 音频转换后的采样率
*/
@Component({
  selector: 'app-video-transform',
  templateUrl: './video-transform.component.html',
  styleUrls: ['./video-transform.component.scss']
})
export class VideoTransformComponent implements OnInit {
  form: FormGroup
  types = VideoType;
  constructor(private fb: FormBuilder, private ffmpegService: FfmpegService) {
    console.log(VideoType);
    this.form = fb.group({
      name: ['ddd'],
      type: ['mp4']
    })
    this.form.valueChanges.subscribe((res)=>{
      console.log(res);
    })
  }

  ngOnInit() {
  }
  // 选择文件
  selectFile() {
    console.log('select');
  }
  confirm() {
    this.ffmpegService.transform()
  }

}
