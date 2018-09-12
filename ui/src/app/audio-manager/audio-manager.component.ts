import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatDialog, MatMenuTrigger} from '@angular/material';
import { DialogService } from '../service/dialog.service';
import { CanvasService } from '../service/canvas.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-audio-manager',
  templateUrl: './audio-manager.component.html',
  styleUrls: ['./audio-manager.component.scss']
})
export class AudioManagerComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild('audio') audio;
  audioList: Array<any> = [];
  paused: boolean = true;
  constructor(private dialogService: DialogService, private canvasService: CanvasService, private sanitizer: DomSanitizer) {
    this.audioList = window['audioList'];
  }

  ngOnInit() {
  }
  menuClosed(e) {
    // console.log(e);
  }
  ngAfterViewInit() {
    // console.log('audio', this.audio);
    const ele = this.audio.nativeElement;
    ele.addEventListener('play',()=>{
      console.log('play');
      this.paused = false;
    })
    ele.addEventListener('pause',()=>{
      console.log('pause');
      this.paused = true;
    })
    this.canvasService.observables.audio.subscribe((res)=>{
      // console.log(res);
      ele.src = res['path'];
    })
  }
  audioItem() {
    return this.canvasService.audio;
  }
  audioPath() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.canvasService.audio.path);
  }
  audioName() {
    return this.canvasService.audio.name;
  }
  // 选择本地音乐
  selectLocalAudio() {
    this.dialogService.selectFile({
      type: 'audio',
      callback: (res) => {
        this.canvasService.setAudio(res[0]);
      }
    })
  }
  // 选择内置音乐
  selectAudio(item) {
    this.canvasService.setAudio(item);
  }

}
