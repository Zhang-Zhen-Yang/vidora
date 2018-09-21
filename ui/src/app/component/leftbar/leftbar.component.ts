import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AnimateTemplateComponent } from '../animate-template/animate-template.component';
import { VideoTransformComponent } from '../video-transform/video-transform.component';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  // 显示模板弹窗
  showTemplateDialog() {
    const dialogRef = this.dialog.open(AnimateTemplateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // 显示视频转换弹窗
  showAudioDialog() {
    const dialogRef = this.dialog.open(VideoTransformComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

