import { Injectable } from '@angular/core';
import { FileService } from './file.service';
import { FfmpegService } from './ffmpeg.service';
import { DialogService } from './dialog.service';
import { Observable} from 'rxjs';
import { Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  paused:boolean = false
  savePath: string = ''
  duration: 1
  fps: 24
  width: 800
  height: 800
  constructor(private fileservice: FileService, private ffmpegService: FfmpegService, private dialogService: DialogService) {

  }
  setInstance() {
   
  }
  init(e) {
    console.log(e);
    const  props = e;
    this.duration = props['duration'];
    this.fps = props['fps'];
    // "duration":121,"fps":40,"width":800,"height":800,"color":"#FFFFFF","paused":false
  }
  setIsPaused(paused) {
    this.paused = paused;
  }
  play() {
    // this.timeline.setPaused(false);
    this.observables.actions.next({
      type: 'play',
    });
  }
  pause() {
    this.observables.actions.next({
      type: 'pause',
    });
  }
  reset() {
    this.observables.actions.next({
      type: 'reset',
    });
  }
  
  goTo() {

  }
  // 导出文件
  exFile() {
    console.log('exFile');
    this.dialogService.openFile((e)=>{
      if (e && e[0]) {
        this.savePath = e[0];
        this.observables.exportImg.next({
          path: e[0]
        })
      }
      console.log(e);
    })
    /* if (this.exportRoot) {
      // this.ffmpegService.generateMp4();
      console.log('ddd');
      // return;
      
      console.log(this.exportRoot);
      const duration = this.exportRoot.timeline.duration
      let currentPosition = 0;
      this.exportRoot.gotoAndStop(0.1);

      const tickHandler = this.exportRoot.timeline.on('change', () => {
        const thisPosition = this.exportRoot.timeline.position;
        this.stage.update();
        const base64str = this.canvas.toDataURL();
        this.fileservice.saveBase64(base64str, thisPosition, () => {
          console.log(thisPosition);
          if(thisPosition + 1 < duration) {
            this.exportRoot.gotoAndStop(thisPosition + 1);
          } else {
            this.exportRoot.timeline.off(tickHandler);
            this.ffmpegService.generateMp4();
            console.log('生成完毕');
          }
          // console.log(thisPosition);
        });
        
      });
      this.exportRoot.gotoAndStop(0);
    }*/
  }
  generateMp4() {
    console.log('mp4');
    this.ffmpegService.generateMp4({savePath: this.savePath, duration: this.duration, fps: this.fps});
  }
  observables={
    actions: new Subject(),
    exportImg: new Subject(),
  }
}
