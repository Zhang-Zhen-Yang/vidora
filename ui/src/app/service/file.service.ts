import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  fs = window['fs']
  path = window['path']
  constructor() {

   }
  getContent() {
    alert('ffffffffffff');
    this.fs.stat('',function(){

    })
  }
  saveBase64(str, index, callback) {
    var imgdata =  str.slice(22)
    this.fs.writeFile(this.path.join('D:\del3', 'img'+index+'.png'), imgdata, 'base64', function(err){
      callback(err)
    });
  }
}
