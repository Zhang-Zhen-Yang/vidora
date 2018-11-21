import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VideoType } from './videoType';
import { FfmpegService } from '../../service/ffmpeg.service'
import { DialogService } from '../../service/dialog.service'
import { MatDialog } from '@angular/material';
import { TransformingProgressComponent } from '../transforming-progress/transforming-progress.component';

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
  constructor(private fb: FormBuilder, private ffmpegService: FfmpegService, private dialogService: DialogService, private dialog: MatDialog) {
    console.log(VideoType);
    this.form = fb.group({
      name: [''],
      type: ['mp4'],
      quality: [80],
    })
    this.form.valueChanges.subscribe((res)=>{
      console.log(res);
    })
  }

  ngOnInit() {
  }
  // 选择文件 ---------------------------------------------------------------------------
  selectFile() {
    console.log('select');
    this.dialogService.selectFile({
      type: 'video',
      callback: (res)=>{
        console.log(res);
        this.form.controls.name.setValue(res[0]);
      }
    })
  }
  // 确定--------------------------------------------------------------------------------
  confirm() {
    const values = this.form.value;
    if(!values.name) {
      alert('请选择要转换视频文件');
      return;
    }
    this.dialogService.getSaveFile((res) => {
      console.log(res);
      
      if (!values.name) {
        alert('请选择要转换视频文件');
        return;
      }
      const options = {...values, dist: res};
      console.log(options);
      if(options.dist == options.name) {
        alert('转换和生成的文件不能为同一文件路径');
        return;
      }
      this.dialog.closeAll();
      setTimeout(()=>{
        this.dialog.open(TransformingProgressComponent, {
          disableClose: true,
          minWidth: 300,
        });
      },0)
      this.ffmpegService.transform(options);
    }, false);
    // this.ffmpegService.transform()
  }


}
