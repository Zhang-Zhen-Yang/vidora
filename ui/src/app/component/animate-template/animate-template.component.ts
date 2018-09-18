import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {CanvasService} from '../../service/canvas.service';

@Component({
  selector: 'app-animate-template',
  templateUrl: './animate-template.component.html',
  styleUrls: ['./animate-template.component.css']
})
export class AnimateTemplateComponent implements OnInit {
  
  constructor(public dialog: MatDialog, private canvasService: CanvasService) {
  }

  ngOnInit() {
    /* setTimeout(()=>{
      this.dialog.closeAll();
    }, 5000)*/
  }
  closedialog() {
    this.dialog.closeAll();
  }
  tempList() {
    return this.canvasService.tempList.concat([{},{},{},{},{},{},{},{},{}]);
  }

}
