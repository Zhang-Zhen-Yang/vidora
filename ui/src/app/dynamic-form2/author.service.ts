import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';
import { AuthorCallbackService } from './author-callback.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  
  constructor(private dialog: MatDialog, private aCS: AuthorCallbackService) { }
  checkAuthor(err, callback = null) {
    console.log('checkAuthor');
    if(err.url && err.url.indexOf('https://oauth.taobao.com/authorize')>-1) {
        this.aCS.callbackList.push(callback);
        // 打开授权窗口
        if(!this.aCS.dialogRef) {
          this.aCS.dialogRef = this.dialog.open(AuthorDialogComponent);
          this.aCS.dialogRef.afterClosed().subscribe(result => {
            // alert(this.aCS.callbackList.length);
            this.aCS.callbackList = [];
            this.aCS.dialogRef = null;
          });
        }
    }
  }
  

}
