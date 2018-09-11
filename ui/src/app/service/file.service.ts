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
  // 删除文件
  deleteTempFiles(dir, prefix){
    this.fs.readdir(dir, (err, res) => {
      console.log(res);
      res.forEach((item)=>{
        if(!prefix) {
          this.fs.unlink(this.path.join(dir, item), (err) => {
            if(err) {
              console.error(err);
            }
          })
        } else if(item.startsWith(prefix)) {
          this.fs.unlink(this.path.join(dir, item), (err) => {
            if(err) {
              console.error(err);
            }
          })
        }
      })
    })
  }
  // 判断文件是否存在
  checkFile() {

  }
}
