import { Component, OnInit } from '@angular/core';
import { CanvasService } from '../service/canvas.service' 

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent implements OnInit {

  constructor( private canvasService: CanvasService) { }

  ngOnInit() {
  }
  fps() {
    return this.canvasService.fps;
  }
  duration() {
    if (this.canvasService.fps && this.canvasService.duration) {
      return (this.canvasService.duration / this.canvasService.fps).toFixed(2);
    }
    return '-';
  }
}
