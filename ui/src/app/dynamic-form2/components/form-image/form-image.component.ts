import { Component, ViewContainerRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import {DomSanitizer} from '@angular/platform-browser';
import { FormService } from '../../form.service';
import { ImageService } from '../../image.service';

import {MatDialog} from '@angular/material';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';


@Component({
  selector: 'form-image',
  styleUrls: ['form-image.component.scss'],
  template: `
    <div 
      class="dynamic-field image-input" 
      [formGroup]="group"
    >
      <label class="image-input-lable" >
        <table class="image-input-table">
          <tr>
            <td rowspan="2">
              <img class="pointer form-image-image" style="width:100px;height:100px;" [src]="this.url(src?.value || '')" (click)="openFile()">
              <input
                class="image-input-input"
                type="text"
                #src
                #input
                [attr.placeholder]="config.placeholder"
                [formControlName]="config.name">
            </td>
            <td class="text-align-right vertical-align-top">
              <button class="blue block" (click)="openFile(0)">线上</button>
            </td>
          </tr>
          <tr>
            <td class="text-align-right">
              <button class="blue block" (click)="openFile(1)">本地</button>
            </td>
          </tr>
        </table>
      </label>
    </div>
  `
})
export class FormImageComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;
  @ViewChild('input') input;

  constructor(private sanitizer: DomSanitizer, private formService: FormService, private dialog: MatDialog, private imageService: ImageService ) {

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
  openFile(type) {
    
    if(type == 0) {
      // this.formService.showImageDialog();
      this.dialog.open(ImageDialogComponent);
      this.imageService.setImageCallback((imageUrl) => {
        if(imageUrl) {
          this.group.controls[this.config.name].setValue(imageUrl, {emitEvent: true});
          this.input.nativeElement.blur();
          this.dialog.closeAll();
        } else {
          alert('请选择图片');
        }
      });

    }else if(type == 1) {
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
  
}
