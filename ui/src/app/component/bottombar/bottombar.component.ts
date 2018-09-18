import { Component, OnInit } from '@angular/core';
import { CanvasService } from '../../service/canvas.service' 

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
  position() {
    let p = (this.canvasService.position / this.canvasService.fps);
    
    return isNaN(p) ? 0 : p.toFixed(1);
  }
  duration() {
    if (this.canvasService.fps && this.canvasService.duration) {
      return (this.canvasService.duration / this.canvasService.fps).toFixed(1);
    }
    return '-';
  }
}
