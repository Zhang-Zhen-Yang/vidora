import { Component, OnInit, Input, ViewChild,AfterViewInit,OnChanges } from '@angular/core';
import { CanvasService } from '../../service/canvas.service';
import {MatDialog} from '@angular/material';
import { GeneratingProgressComponent } from '../generating-progress/generating-progress.component';
import { DialogService } from '../../service/dialog.service';
import { AnimateTemplateLoadingProgressComponent } from '../animate-template-loading-progress/animate-template-loading-progress.component'

@Component({
  selector: 'app-canvas-space',
  templateUrl: './canvas-space.component.html',
  styleUrls: ['./canvas-space.component.css']
})
export class CanvasSpaceComponent implements OnInit {
  @ViewChild('webview') webview;
  
  
  ready = false
  constructor(private canvasService: CanvasService, public dialog: MatDialog, private dialogService: DialogService ) { 
    this.showLoadingDialog(true);
   }

  ngOnInit() {
      /* setTimeout(()=>{
        this.dialog.open(GeneratingProgressComponent, {
          minWidth: 300,
        });
      }, 2000);*/
    // 订阅
    // 播放 暂停
    this.canvasService.observables.actions.subscribe((e)=>{
      console.log(e['type']);
      this.webview.nativeElement.send(e['type'],'');
    });
    // 导出图片
    this.canvasService.observables.exportImg.subscribe((e)=>{
      console.log(e['path']);
      this.webview.nativeElement.send('exportImg', JSON.stringify(e));
      this.dialog.open(GeneratingProgressComponent, {
        disableClose: true,
        minWidth: 300,
      });
    });
    // 加载模板
    this.canvasService.observables.template.subscribe((e)=>{
      // console.log(e['action']);
      // this.webview.nativeElement.send('template', e['action']);
      this.webview.nativeElement.loadURL(e['url']);

      this.showLoadingDialog(true);

    });
    // 对模板内容进行设置(旧)
    this.canvasService.observables.optionsSet.subscribe((e)=>{
      console.log('对模板内容进行设置');
      console.log(JSON.stringify(e['options']));
      this.webview.nativeElement.send('setOptions', JSON.stringify(e['options']));
    });
    // 对模板内容进行设置(新)
    this.canvasService.observables.optsSet.subscribe((e)=>{
      console.log('对模板内容进行设置(新)');
      console.log(JSON.stringify(e['opts']));
      this.webview.nativeElement.send('setOpts', JSON.stringify(e['opts']));
    });
    this.canvasService.observables.localActions.subscribe((e)=>{
      switch(e['action']) {
        case 'reload':
          this.webview.nativeElement.reload();
          this.showLoadingDialog(true);
          break;
        default: break;
      }
    });

  }
  ngOnChanges(e){
    //console.log(e);
    if(e.fileObj){
      let activeFile = e.fileObj.currentValue;
      if(activeFile){
        this.render(activeFile);        
      } 
    }
  }
  /**
   * 元素加载完成
   */
  ngAfterViewInit(){
    // 加载完成
    this.webview.nativeElement.addEventListener('dom-ready',()=>{
      this.ready = true;
      
      this.webview.nativeElement.openDevTools();
      this.injectCSS();
      // this.webview.nativeElement.send('setImage','aaaaaaaaaa.jpg');
      // this.webview.nativeElement.executeJavaScript('console.log(canvas)');
      // this.webview.nativeElement.executeJavaScript('stop()');
      this.showLoadingDialog(false);
    })
    this.webview.nativeElement.addEventListener('did-fail-load', () => {
      alert('加载出错');
      this.showLoadingDialog(false);
    })
    this.webview.nativeElement.addEventListener('ipc-message',(e)=>{
      switch (e.channel) {
        case 'inited':
          // console.log(e);
          this.canvasService.init(JSON.parse(e.args[0]),JSON.parse(e.args[1]), JSON.parse(e.args[2]));
          break;
        case 'base64':
          console.log('base64');
          this.dialogService.saveImg(e['args'][0]);
          break;
        case 'setIsPaused':
          this.canvasService.setIsPaused(e['args'][0]);
          break;
        case 'generateMp4':
          this.canvasService.generateMp4();
          break;
        case 'tick':
          this.canvasService.setCurrentPosition(e['args'][0]);
          break;
          case 'setProgress':
          this.canvasService.setProgress(e['args'][0]);
          break;
        default:
          break;
      }
    })
  }
  render(activeFile){
    if(this.ready){
      switch(activeFile.type){
        case 'image':
          this.webview.nativeElement.send('setImage',activeFile['src']);
          break;
        case 'media':
          this.webview.nativeElement.send('setMedia',activeFile['src']);
          break;
        default :            
          break;
      }
    }
    
  }
  /**
   * 向webview 注入css代码
   */
  injectCSS() {
    this.webview.nativeElement.insertCSS(`
    body{
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      background-color: #eeeeee!important;
      position: fixed;
      left: 0;
      top: 0;
      right:0;
      bottom: 0;
      overflow: auto;
    }
    #animation_container{
      
    }
    canvas {
      /*margin-top: 20px;*/
    }
    input[type="range"]{
      position: absolute;
      z-index: 10;
      left: 10px;
      top: 49px;
    }
  `);
  }
  showContextMenu() {
    this.canvasService.showCanvasContextMenu();
  }
  // 显示加载模板的弹窗
  showLoadingDialog(show: boolean) {
    if (show) {
      setTimeout(()=>{
        this.dialog.open(AnimateTemplateLoadingProgressComponent, {
          disableClose: true,
          minWidth: 300,
        });
      }, 0)
    } else {
      setTimeout(()=>{
        this.dialog.closeAll();
      }, 0)
    }
    
  }
  
}
