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
  generateMp4({distPath, audioPath, imgPrefix, savePath, duration, fps, time, width, height, quality}, callback) {

    // alert('generateMp4');
    // console.log(__dirname);
    const currentDir = window['dirname'];
    const frompath = '"' + this.path.join(savePath, `${imgPrefix}%d.png`) + '"';
    const outputpath = '"' + distPath + '"'
    const audioCommand = audioPath ? ` -t ${time} -i ${audioPath}` : '';
    let qual = (100 - quality)/100 * 51;
    if(qual > 51) {
      qual = 51
    }
    if (qual <= 1 ) {
      qual = 1;
    }
    const crf = ` -crf ${qual} `;// ' -crf 51 ';
    var commandStr = '"./ffmpeg/bin/ffmpeg.exe" -y -r '+ fps + ' -t '+ time +' -f image2 -i '+ frompath + audioCommand + ' -pix_fmt yuv420p -preset slow -profile:v baseline -q:v 4 -s '+width+'*'+ height +' '+ crf + outputpath;
    // var commandStr = '"./ffmpeg/bin/ffmpeg.exe" -r 30 -f image2 -i D:/del3/img%d.png -t 10 -i ./audio/1.mp3 -pix_fmt yuv420p -preset slow -profile:v baseline -q:v 4 D:/del3/video.mp4'
    
    // alert(commandStr);
    console.log(commandStr);
    this.exec(commandStr, {cwd: currentDir}, (err,data,data1) => {
      
      if (err) {
        console.error(err);
        this.hideDialog();
        setTimeout(()=>{
          alert(err);
        }, 1000)
        return
      }
      // this.snackBar.open('生成成功', 'ok', {duration: 3000});
      this.fileService.deleteTempFiles(savePath, imgPrefix);

      this.hideDialog();
      setTimeout(()=>{
        alert('生成成功');
      }, 1000)
      callback()
    })
  }
  hideDialog() {
    this.dialog.closeAll()
    window.resizeBy(1, 0);
    window.resizeBy(-1, 0);
    try{
      setTimeout(()=>{
        document.querySelector('.cdk-overlay-container').innerHTML = '';
      }, 2000);
    } catch (e) {
      console.error(e);
    }
  }
}
