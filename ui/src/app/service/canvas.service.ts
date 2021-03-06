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
  
  imgPrefix: string = '';
  duration: 1
  fps = 24
  width = 800
  height =  800
  position = 0
  progressPosition =  0
  // 表单配置
  options = [];
  opts = [];
  expoprtOptons = {width: 800, height: 800, time: 1, quality: 90}
  generateStep: number = 0
  tempPath = window['path'].join(window['dirname'], 'tempDir') // 临时文件夹，用于存放视频生成过程中的逐帧图片

  // 音频文件名及路径
  audio: {name: string, path: string} = { name: '无', path: '' } // audio
  fonts = []
  // 模板列表
  tempList = [];
  // canvas 上下文菜单
  canvasContextMenu = new window['remote'].Menu();
  constructor(private fileservice: FileService, private ffmpegService: FfmpegService, private dialogService: DialogService) {
    this.fileservice.deleteTempFiles(this.tempPath, '');
    // 获取字体列表
    window['fontList'].getFonts()
    .then(fonts => {
      // alert(typeof fonts)
      this.fonts = fonts;
      this.opts.forEach((opt)=>{
        opt.forEach((item)=>{
          if(item.type == 'font') {
            item.options = fonts;
          }
        })
      })
    })
    .catch(err => {
      console.log(err)
    })
    // 模板列表
    this.tempList = window['tempList'];
    this.initMenu();
    this.initShortcut();
  }
  // 初始化菜单
  initMenu() {
    const _t = this;
    this.canvasContextMenu.append(new window['remote'].MenuItem({
      label:'保存图片',
      click(){ 
        _t.observables.actions.next({
          type: 'getBase64',
        })
      }
    }));
    this.canvasContextMenu.append(new window['remote'].MenuItem({
      label:'刷新',
      click(){ 
        _t.observables.localActions.next({
          action: 'reload',
        })
      }
    }));
  }
  initShortcut() {
    document.addEventListener('keydown', (e) => {
      console.log(e);
      const code = e.which;
      switch(code) {
        // space
        /*case 32:
          if(this.paused) {
            this.play();
          } else {
            this.pause();
          }
        break;*/
        default:
        break;
      }
    })
  }
  setInstance() {
   
  }
  init(e, e2, e3) {
    console.log(e);
    const  props = e;
    // alert(JSON.stringify(props));
    this.duration = props['duration'];
    this.fps = props['fps'];
    this.width = props.width;
    this.height = props.height;
    this.paused = props.paused;
    this.options = this.reduceOptions(e2); // this.options;
    
    e3.forEach((opt)=>{
      opt.forEach((item)=>{
        if(item.type == 'font') {
          item.options =  this.fonts;
        }
      }) 
    })
    
    this.opts = e3;
    
    
    console.log('e3', e3);
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
  setProgress(p) {
    this.progressPosition = p;
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
    // 获取mp4 保存路径
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
      
      // this.dialogService.showProgress();
    }, true);
  }
  // 生成mp4 文件
  generateMp4() {
    this.generateStep = 1;
    this.progressPosition = 0;
    this.ffmpegService.generateMp4({
      distPath: this.videoPath,
      savePath: window['path'].join(window['dirname'], 'tempDir'),
      audioPath: this.audio.path,
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
    optsSet: new Subject(),
    generateMp4: new Subject(),
    audio: new Subject(),
    localActions: new Subject(),
  }
  loadTemplate(url) {
    if (!url) {
      alert('无效的模板地址');
      return;
    }
    // this.options = [];
    this.opts = [];
    /* this.observables.options.next({
      options: [],
    });*/
    this.observables.optsSet.next({
      opts: [],
    });
    this.observables.template.next({
      action: 'loadTemplate',
      url,
    })
  }
  // 旧
  setOptions(options) {
    console.log('setOptions');
    this.observables.optionsSet.next({
      options
    })
  }
  // 新
  setOpts(opts) {
    console.log('setOptions');
    this.observables.optsSet.next({
      opts
    })
  }
  /**
   * 设置音乐
   */
  setAudio(val) {
    let audio = {name:'无', path: ''}
    if(typeof val == 'string') {
      audio = {
        name: window['path'].basename(val),
        path: val,
      }
    } else {
      audio = val;
    }
    this.audio = audio;
    this.observables.audio.next(audio);
  }
  showCanvasContextMenu() {
    this.canvasContextMenu.popup(window['remote'].getCurrentWindow());
  }
}
