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
  savePath: string = ''//
  videoPath: string = '' // video
  imgPath: string = ''// img
  audio: string = '' // audio
  imgPrefix: string = '';
  duration: 1
  fps: 24
  width: 800
  height: 800
  position: 0
  // 表单配置
  options = [];
  expoprtOptons = {width: 800, height: 800, time: 1}
  generateStep: number = 0
  tempPath = window['path'].join(window['dirname'], 'tempDir')
  constructor(private fileservice: FileService, private ffmpegService: FfmpegService, private dialogService: DialogService) {
    this.fileservice.deleteTempFiles(this.tempPath, '');
  }
  setInstance() {
   
  }
  init(e, e2) {
    console.log(e);
    const  props = e;
    // alert(JSON.stringify(props));
    this.duration = props['duration'];
    this.fps = props['fps'];
    this.width = props.width;
    this.height = props.height;
    this.paused = props.paused;
    this.options = this.reduceOptions(e2); // this.options;
    console.log(this.options);
    this.observables.options.next({
      options: this.options,
    });
    // "duration":121,"fps":40,"width":800,"height":800,"color":"#FFFFFF","paused":false
  }
  reduceOptions(options) {
    let resultOptions = []
    options.forEach((item)=>{
      switch(item.type) {
        case 'image':
          resultOptions.push(item);
          ['x', 'y', 'scaleX', 'scaleY'].forEach((i)=>{
            if (item[i] != undefined) {
              resultOptions.push({
                type: 'number',
                value: item[i],
                name: `${item.name}-${i}`
              });
            }
          })
          break;
        default:
          resultOptions.push(item)
          break;
      }
    });
    return resultOptions;
  }
  setIsPaused(paused) {
    this.paused = paused;
  }
  setCurrentPosition(p) {
    this.position = p;
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
  exFile(expoprtOptons) {
    this.generateStep = 0;
    console.log('exFile');
    this.expoprtOptons = expoprtOptons;

    /* this.dialogService.openFile((e)=>{
      if (e && e[0]) {
        this.savePath = e[0];
        this.observables.exportImg.next({
          path: e[0]
        })
      }
      console.log(e);
    })*/
    this.dialogService.getSaveFile((file)=>{
      if(!file) {
        return;
      }
      this.videoPath = file;
      console.log('file', file);

      this.imgPrefix = Date.now() + 'img';
      this.observables.exportImg.next({
        path: window['path'].join(window['dirname'], 'tempDir'),
        imgPrefix: this.imgPrefix,
      })
      this.dialogService.showProgress();
    });
  }
  // 生成mp4 文件
  generateMp4() {
    this.generateStep = 1;
    this.ffmpegService.generateMp4({
      distPath: this.videoPath,
      savePath: window['path'].join(window['dirname'], 'tempDir'),
      duration: this.duration,
      fps: this.fps,
      imgPrefix: this.imgPrefix,
      ...this.expoprtOptons
    }, () => {
      /* this.observables.generateMp4.next({
        success: true,
      });*/
    });
  }
  observables={
    actions: new Subject(),
    exportImg: new Subject(),
    template: new Subject(),
    options: new Subject(),// 用于actionpanel
    optionsSet: new Subject(),
    generateMp4: new Subject(),
  }
  loadTemplate(url) {
    if (!url) {
      alert('无效的模板地址');
      return;
    }
    this.options = [];
    this.observables.options.next({
      options: [],
    });
    this.observables.template.next({
      action: 'loadTemplate',
      url,
    })
  }

  setOptions(options) {
    console.log('setOptions');
    this.observables.optionsSet.next({
      options
    })
  }
}
