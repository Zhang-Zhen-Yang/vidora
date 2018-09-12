import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import { GeneratingProgressComponent } from '../generating-progress/generating-progress.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  projectDir = null
  path = window['path']
  constructor(private dialog: MatDialog) { }
  /**
   * 打开目录
   * @param callback 
   */
  openFile(callback){
    let _this = this;
    window['remote'].dialog.showOpenDialog(
      window['remote'].getCurrentWindow(),
      {
        title:'请选择文件目录',
        properties: [ 'openDirectory', 'multiSelections']
      },
      function(filePaths){
        callback(filePaths);
        //this.getCurrentDirFiles(filePaths[0],result);
        if(!filePaths){
          return;
        }
        _this.projectDir = filePaths[0];
        
        localStorage.setItem('projectDir',filePaths[0]);
        /*let homePath = window['remote'].app.getPath('userData');
        console.log('userData ',homePath);*/
      }
    );
  }
  // 保存文件
  getSaveFile(callback){
    const videoDir = localStorage.getItem('videoDir') || '';
    // alert(videoDir);
    window['remote'].dialog.showSaveDialog(
      window['remote'].getCurrentWindow(),
      {
        title:'保存视频',
        defaultPath: videoDir,
        filters: [
          {name: '视频', extensions: ['mp4']},
        ]
      },
      function(res){
        callback(res);
        if(typeof res == 'string') {
          const dirName = this.path.dirname(res);
          localStorage.setItem('videoDir', dirName);
          // alert(dirName);
        }
      }
    )
  }
  showProgress() {
    
  }
  // 打开音乐文件
  selectFile({type, callback}) {
    const audioDir = localStorage.getItem('audioDir') || '';
    // alert(audioDir);
    window['remote'].dialog.showOpenDialog(
      window['remote'].getCurrentWindow(),
      {
        title:'请选择音乐',
        defaultPath: audioDir,
        properties: [ 'openFile'],
        filters: [
          {name: '音乐', extensions: ['mp3', 'wav']},
        ]
      },
      (filePaths) => {
        //this.getCurrentDirFiles(filePaths[0],result);
        if(!filePaths){
          return;
        }
        callback(filePaths);
        if(Array.isArray(filePaths) && typeof filePaths[0] == 'string') {
          const dirName = this.path.dirname(filePaths[0]);
          localStorage.setItem('audioDir', dirName);
          // alert(dirName);
        }
      }
    );
  }
}
