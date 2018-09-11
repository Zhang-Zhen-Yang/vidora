import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import { GeneratingProgressComponent } from '../generating-progress/generating-progress.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  projectDir = null
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
    window['remote'].dialog.showSaveDialog(
      window['remote'].getCurrentWindow(),
      {
        title:'保存视频',
        filters: [
          {name: '视频', extensions: ['mp4']},
        ]
      },
      function(res){
        callback(res);
      }
    )
  }
  showProgress() {
    
  }
}
