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
        <!--<div
          class="form-image-wrap" 
          [ngStyle]="{'background-image': 'url('+ (src?.value || '') + ')'}"
          (click)="openFile()"
        >
        </div>-->
        <img class="form-image-image" style="width:100px;height:100px;" [src]="this.url(src?.value || '')" (click)="openFile()">
        <div (click)="openFile()" style="flex: 1;">
          {{ config.label }}
        </div>
        <input
          class="image-input-input"
          type="text"
          #src
          #input
          [attr.placeholder]="config.placeholder"
          [formControlName]="config.name">
      </label>
    </div>
  `
})
export class FormImageComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;
  @ViewChild('input') input;

  constructor(private sanitizer: DomSanitizer) {

  }
  ngOnInit() {

  }
  url(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  // 打开文件
  openFile() {
    window['remote'].dialog.showOpenDialog(
      window['remote'].getCurrentWindow(),
      {
        title:'请选择文件',
        properties: [ 'openFile'],
        filters: [
          {name: 'Images', extensions: ['jpg', 'png', 'gif']},
        ]
      },
      (filePaths) => {
        //this.getCurrentDirFiles(filePaths[0],result);
        if(!filePaths){
          return;
        }
        console.log(filePaths[0]);
        // console.log(this.group.controls[this.config.name]);
        this.group.controls[this.config.name].setValue(filePaths[0].replace(/\\/g, '/'), {emitEvent: true});
        this.input.nativeElement.blur();
      }
    );

  }
}
