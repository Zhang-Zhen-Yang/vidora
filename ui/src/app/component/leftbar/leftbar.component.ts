import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AnimateTemplateComponent } from '../animate-template/animate-template.component';
import { VideoTransformComponent } from '../video-transform/video-transform.component';
import { AuthorDialogComponent } from '../../dynamic-form2/components/author-dialog/author-dialog.component';
import { AuthorCallbackService } from '../../dynamic-form2/author-callback.service';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {

  constructor(public dialog: MatDialog, private authorCallback: AuthorCallbackService) { }

  ngOnInit() {
  }
  // 显示模板弹窗
  showTemplateDialog() {
    const dialogRef = this.dialog.open(AnimateTemplateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.authorCallback.callbackList.push(() => {
      alert('dddddddddddddddddd');
    })

    /*let authorDialogRef = this.dialog.open(AuthorDialogComponent);
    this.authorCallback.dialogRef = authorDialogRef;
    authorDialogRef.afterClosed().subscribe(res=>{
      this.authorCallback.dialogRef = null;
      this.authorCallback.callbackList = null;

    })*/
  }
  // 显示视频转换弹窗
  showAudioDialog() {
    const dialogRef = this.dialog.open(VideoTransformComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

