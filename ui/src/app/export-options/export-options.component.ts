import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material';
import { CanvasService } from '../service/canvas.service';
@Component({
  selector: 'app-export-options',
  templateUrl: './export-options.component.html',
  styleUrls: ['./export-options.component.scss']
})
export class ExportOptionsComponent implements OnInit {
  form: FormGroup
  constructor(private canvasService: CanvasService, private fb: FormBuilder, private matDialog:MatDialog) { }

  ngOnInit() {
    const {width, height, duration, fps} = this.canvasService;
    console.log([width, height, duration, fps]);
    // alert('ddd');
    this.form = this.fb.group({
      time: [this.time(), Validators.maxLength(10)],
      width: [width],
      height: [height],
      quality: [80],
    })
    this.form.valueChanges.subscribe((res)=>{
      console.log(res);
    })
  }
  time() {
    return Math.floor(this.canvasService.duration / this.canvasService.fps);
  }
  width() {
    return this.canvasService.width;
  }
  height() {
    return this.canvasService.height;
  }
  confirm() {
    this.matDialog.closeAll();
    console.log(this.form.value);
    this.canvasService.exFile(this.form.value);
  }

}
