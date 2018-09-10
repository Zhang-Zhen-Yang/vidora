import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FfmpegService {
  exec
  path
  constructor() { 
    this.exec = window['exec'];
    this.path = window['path'];
  }
  generateMp4({savePath, duration, fps, time, width, height}) {
    alert('generateMp4');
    // console.log(__dirname);
    const currentDir = window['dirname'];
    const frompath = this.path.join(savePath, 'img%d.png');
    const distpath = this.path.join(savePath, 'video.mp4'); // 'D:/del3/video.mp4';
    var commandStr = '"./ffmpeg/bin/ffmpeg.exe" -r '+ fps+' -f image2 -i '+ frompath +' -t '+ time +' -i ./audio/1.mp3 -pix_fmt yuv420p -preset slow -profile:v baseline -q:v 4 -s '+width+'*'+ height + distpath;
    // var commandStr = '"./ffmpeg/bin/ffmpeg.exe" -r 30 -f image2 -i D:/del3/img%d.png -t 10 -i ./audio/1.mp3 -pix_fmt yuv420p -preset slow -profile:v baseline -q:v 4 D:/del3/video.mp4'
    
    alert(commandStr);
    console.log(commandStr);
    var time = new Date();
    this.exec(commandStr, {cwd: currentDir},function (err,data,data1) {
      if (err) {
        console.error(err);
        return
      }
      console.log('生成成功');
    })
  }
}
