import { Injectable } from '@angular/core';
import { FileService } from './file.service';
import {MatSnackBar, MatDialog} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class FfmpegService {
  exec
  path
  constructor(private fileService: FileService, private snackBar: MatSnackBar, public dialog: MatDialog) { 
    this.exec = window['exec'];
    this.path = window['path'];
  }
  generateMp4({distPath, imgPrefix, savePath, duration, fps, time, width, height}, callback) {

    // alert('generateMp4');
    // console.log(__dirname);
    const currentDir = window['dirname'];
    const frompath = this.path.join(savePath, `${imgPrefix}%d.png`);
    var commandStr = '"./ffmpeg/bin/ffmpeg.exe" -y -r '+ fps+' -t '+ time +' -f image2 -i '+ frompath +' -t '+ time +' -i ./audio/1.mp3 -pix_fmt yuv420p -preset slow -profile:v baseline -q:v 4 -s '+width+'*'+ height +' '+ distPath;
    // var commandStr = '"./ffmpeg/bin/ffmpeg.exe" -r 30 -f image2 -i D:/del3/img%d.png -t 10 -i ./audio/1.mp3 -pix_fmt yuv420p -preset slow -profile:v baseline -q:v 4 D:/del3/video.mp4'
    
    // alert(commandStr);
    console.log(commandStr);
    this.exec(commandStr, {cwd: currentDir}, (err,data,data1) => {
      this.hideDialog();
      if (err) {
        console.error(err);
        alert(err);
        return
      }
      // this.snackBar.open('生成成功', 'ok', {duration: 3000});
      alert('生成成功');
      this.fileService.deleteTempFiles(savePath, imgPrefix);
      callback()
    })
  }
  hideDialog() {
    this.dialog.closeAll()
    window.resizeBy(1, 0);
    window.resizeBy(-1, 0);
  }
}
