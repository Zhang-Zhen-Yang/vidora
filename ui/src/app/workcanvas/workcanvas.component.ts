import { Component, OnInit, AfterViewInit, ElementRef} from '@angular/core';
import { CanvasService } from '../service/canvas.service' 
import {MatDialog} from '@angular/material';
import { ExportOptionsComponent } from '../export-options/export-options.component';

@Component({
  selector: 'app-workcanvas',
  templateUrl: './workcanvas.component.html',
  styleUrls: ['./workcanvas.component.css']
})
export class WorkcanvasComponent implements OnInit, AfterViewInit {

  c: any
  constructor(private elementRef: ElementRef, private canvasService: CanvasService, public dialog: MatDialog) { 
    this.c = window['createjs'];
    console.log(this.c);
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    let canvas =this.elementRef.nativeElement.querySelector('#canvas');//获取第一个p
    // this.canvasService.init(canvas);
  }
  togglePlay() {
    if (this.canvasService.paused) {
      this.canvasService.play();
    } else {
      this.canvasService.pause();
    }
  }
  play() {
    this.canvasService.play();
  }
  pause() {
    this.canvasService.pause();
  }
  reset() {
    this.canvasService.reset();
  }
  // 导出mp4
  exFile() {
    const dialogRef = this.dialog.open(ExportOptionsComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    // this.canvasService.exFile();
  }
  isPaused() {
    return this.canvasService.paused;
  }
  fps() {
    return this.canvasService.fps;
  }
  duration() {
    return this.canvasService.duration;
  }

}
