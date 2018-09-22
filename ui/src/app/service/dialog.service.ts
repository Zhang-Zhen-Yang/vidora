import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import { GeneratingProgressComponent } from '../component/generating-progress/generating-progress.component';
import { FileService } from './file.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  projectDir = null
  path = window['path']
  typeMap = {
    audio: {
      title: '请选择音乐',
      name: '音乐',
      extensions: ['mp3', 'wav'],
    },
    video: {
      title: '请选择视频',
      name: '视频',
      extensions: ['mp4', 'mov'],
    },
  }
  constructor(private dialog: MatDialog, private fileService: FileService) { }
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
          {name: 'mp4', extensions: ['mp4']},
          {name: 'mov', extensions: ['mov']},
          {name: 'avi', extensions: ['avi']},
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
  // 打开音乐文件
  selectFile({type, callback}) {
    const Dir = localStorage.getItem(`${type}Dir`) || '';
    // alert(audioDir);
    window['remote'].dialog.showOpenDialog(
      window['remote'].getCurrentWindow(),
      {
        title: this.typeMap[type].title,
        defaultPath: Dir,
        properties: [ 'openFile'],
        filters: [
          {name: this.typeMap[type].name, extensions: this.typeMap[type].extensions},
        ]
      },
      (filePaths) => {
        // this.getCurrentDirFiles(filePaths[0],result);
        if(!filePaths){
          return;
        }
        callback(filePaths);
        if(Array.isArray(filePaths) && typeof filePaths[0] == 'string') {
          const dirName = this.path.dirname(filePaths[0]);
          localStorage.setItem(`${type}Dir`, dirName);
          // alert(dirName);
        }
      }
    );
  }
  saveImg(str) {
    const saveImageDir = localStorage.getItem('saveImageDir') || '';
    // alert(videoDir);
    window['remote'].dialog.showSaveDialog(
      window['remote'].getCurrentWindow(),
      {
        title:'保存图片',
        defaultPath: saveImageDir,
        filters: [
          {name: '图片', extensions: ['png']},
        ]
      },
      (res) => {
        if(typeof res == 'string') {
          const dirName = this.path.dirname(res);
          localStorage.setItem('saveImageDir', dirName);
          // alert(dirName);
          this.fileService.saveBase64(str, res, (err)=>{
            if (err) {
              alert(err);
              return;
            }
            alert('保存成功');
          });
        }
      }
    )
  }
}
