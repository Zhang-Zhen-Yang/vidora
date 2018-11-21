import { Injectable } from '@angular/core';
import { FileService } from './file.service';
import {MatSnackBar, MatDialog} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class FfmpegService {
  exec
  path
  currentDir = window['dirname'];
  constructor(private fileService: FileService, private snackBar: MatSnackBar, public dialog: MatDialog) { 
    this.exec = window['exec'];
    this.path = window['path'];
  }
  generateMp4({distPath, audioPath, imgPrefix, savePath, duration, fps, time, width, height, quality}, callback) {

    // alert('generateMp4');
    // console.log(__dirname);
    
    // 临时图片目录
    const frompath = '"' + this.path.join(savePath, `${imgPrefix}%d.png`) + '"';
    // 视频生成路径
    const outputpath = '"' + distPath + '"'
    // 音频
    const audioCommand = audioPath ? ` -t ${time} -i ${audioPath}` : '';
    // 视频质量 1 - 51;越小越清晰
    let qual = (100 - quality)/100 * 51;
    if(qual > 51) {
      qual = 51
    }
    if (qual <= 1 ) {
      qual = 1;
    }
    // 视频尺寸（应方显示为原有模板的高宽比）
    const videoSize = width+'*'+ height ;
    // 视频质量
    const crf = ` -crf ${qual} `;// ' -crf 51 ';
    var commandStr = '"./ffmpeg/bin/ffmpeg.exe" -y -r '+ fps + ' -t '+ time +' -f image2 -i '+ frompath + audioCommand + ' -pix_fmt yuv420p -preset slow -profile:v baseline -q:v 4 -s '+ videoSize +' '+ crf + outputpath;
    // var commandStr = '"./ffmpeg/bin/ffmpeg.exe" -r 30 -f image2 -i D:/del3/img%d.png -t 10 -i ./audio/1.mp3 -pix_fmt yuv420p -preset slow -profile:v baseline -q:v 4 D:/del3/video.mp4'
    
    // alert(commandStr);
    console.log(commandStr);
    this.exec(commandStr, {cwd: this.currentDir}, (err,data,data1) => {
      
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
  current = '';
  duration = '';
  pid = '';
  // 转换格式
  transform({name, dist, quality}) {
    this.current = '';
    this.duration = '';
    this.current = '';
    this.pid = '';
    // 视频质量 1 - 51;越小越清晰
    let qual = (100 - quality)/100 * 51;
    if(qual > 51) {
      qual = 51
    }
    if (qual <= 1 ) {
      qual = 1;
    }
    // 视频质量
    const crf = ` -crf ${qual} `;// ' -crf 51 ';
    const commandStr = `"./ffmpeg/bin/ffmpeg.exe" -y -i "${name}" ${crf} "${dist}"`;
    // const commandStr = '"./ffmpeg/bin/ffmpeg.exe" -i "C:/Users/Administrator/Desktop/mp4/需要.mp4" "C:/Users/Administrator/Desktop/mp4/需要.mov"';   
    console.log(commandStr); 
    const command = this.exec(commandStr, {cwd: this.currentDir, killSignal: 'SIGTERM',}, (err,data,data1) => {
      if(err) {
        console.error(err);
        return ;
      }
      alert('转换完成');
      this.dialog.closeAll()
      console.log(data);
    })
    command.stdout.on('data',(res)=>{
      console.log(res);
    })
    command.stderr.on('data',(res)=>{
      if (!this.pid) {
        this.pid = command.pid;
      }
      console.error(res);
      if(res.startsWith('Input')) {
        const matches = (/Duration:(.*?),/mig.exec(res));
        if(Array.isArray(matches) && matches[1]) {
          this.duration = matches[1];
        }
      }
      if(res.startsWith('frame')) {
        console.log(res);
        const matches = /time=(.*?)\s/mig.exec(res);
        if(Array.isArray(matches) && matches[1]) {
          this.current = matches[1];
        }
      }
      console.log([this.duration, this.current]);
    })
    /* setTimeout(()=>{
      console.log('k----------------------------------------------------------------------------');
      console.log(command);
      const pid = command.pid;
      console.log(pid);
      this.exec(`taskkill  /f /t /pid ${pid}`, (err, stdout, stderr)=>{
        if(err) {
          console.log(err);
          return;
        }
        console.log(stdout);
      })
    }, 10000)*/
    
  }
}
