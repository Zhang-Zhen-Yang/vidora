import { Component, OnInit, Input, ViewChild,AfterViewInit,OnChanges } from '@angular/core';
import { CanvasService } from '../service/canvas.service';
@Component({
  selector: 'app-canvas-space',
  templateUrl: './canvas-space.component.html',
  styleUrls: ['./canvas-space.component.css']
})
export class CanvasSpaceComponent implements OnInit {
  @ViewChild('webview') webview;
  ready = false
  constructor(private canvasService: CanvasService) { }

  ngOnInit() {
    // 订阅
    this.canvasService.observables.actions.subscribe((e)=>{
      console.log(e['type']);
      this.webview.nativeElement.send(e['type'],'');
    })
    this.canvasService.observables.exportImg.subscribe((e)=>{
      console.log(e['path']);
      this.webview.nativeElement.send('exportImg', e['path']);
    })
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
    this.webview.nativeElement.addEventListener('dom-ready',()=>{
      this.ready = true;
      this.webview.nativeElement.openDevTools();
      this.injectCSS();
      // this.webview.nativeElement.send('setImage','aaaaaaaaaa.jpg');
      // this.webview.nativeElement.executeJavaScript('console.log(canvas)');
      // this.webview.nativeElement.executeJavaScript('stop()');
    })
    this.webview.nativeElement.addEventListener('ipc-message',(e)=>{
      switch (e.channel) {
        case 'inited':
          console.log(e);
          this.canvasService.init(JSON.parse(e.args[0]));
          break;
        case 'base64':
          console.log(e);
          break;
        case 'setIsPaused':
          this.canvasService.setIsPaused(e['args'][0]);
          break;
        case 'generateMp4':
          this.canvasService.generateMp4();
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
      background-color: red;
    }
    canvas {
      margin-top: 20px;
    }
  `);
  }
}
