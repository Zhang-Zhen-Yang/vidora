import { Component, ViewContainerRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'form-image',
  styleUrls: ['form-image.component.scss'],
  template: `
    <div 
      class="dynamic-field image-input" 
      [formGroup]="group"
    >
      <label class="image-input-lable" >
        <img class="pointer form-image-image" style="width:100px;height:100px;" [src]="this.url(src?.value || '')" (click)="openFile()">
        <input
          class="image-input-input"
          type="text"
          #src
          #input
          [attr.placeholder]="config.placeholder"
          [formControlName]="config.name">
      </label>
      <div>
        <div class="image-input-attr" *ngIf="group.controls[config.name+'-x']">
          <span>距左边距:</span>
          <input type="number" step="10" [formControlName]="config.name+'-x'">
        </div>
        <div class="image-input-attr" *ngIf="group.controls[config.name+'-y']">
          <span>距上边距:</span>
          <input type="number" step="10" [formControlName]="config.name+'-y'">
        </div>
        <div class="image-input-attr" *ngIf="group.controls[config.name+'-scaleX']">
          <span>宽缩放比:</span>
          <input type="number" step="0.1" [formControlName]="config.name+'-scaleX'">
        </div>
        <div class="image-input-attr" *ngIf="group.controls[config.name+'-scaleY']">
          <span>高缩放比:</span>
          <input type="number" step="0.1" [formControlName]="config.name+'-scaleY'">
        </div>
      </div>
    </div>
  `
})
export class FormImageComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;
  @ViewChild('input') input;

  constructor(private sanitizer: DomSanitizer) {

  }
  ngOnchange() {
    console.log(this.group);
  }
  ngOnInit() {
    console.log(this.group);
  }
  url(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  // 打开文件
  openFile() {
    const imageDir = localStorage.getItem('imageDir') || '';
    // alert(imageDir);
    window['remote'].dialog.showOpenDialog(
      window['remote'].getCurrentWindow(),
      {
        title:'请选择图片',
        defaultPath: imageDir,
        properties: [ 'openFile'],
        filters: [
          {name: '图片', extensions: ['jpg', 'jpeg', 'png', 'bmp', 'gif']},
        ]
      },
      (filePaths) => {
        //this.getCurrentDirFiles(filePaths[0],result);
        if(!filePaths){
          return;
        }
        if(Array.isArray(filePaths) && typeof filePaths[0] == 'string') {
          localStorage.setItem('imageDir', window['path'].dirname(filePaths[0]));
        }
        console.log(filePaths[0]);
        // console.log(this.group.controls[this.config.name]);
        this.group.controls[this.config.name].setValue(filePaths[0].replace(/\\/g, '/'), {emitEvent: true});
        this.input.nativeElement.blur();
      }
    );

  }
}
