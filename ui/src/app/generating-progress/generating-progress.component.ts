import { Component, OnInit } from '@angular/core';
import { CanvasService } from '../service/canvas.service';

@Component({
  selector: 'app-generating-progress',
  templateUrl: './generating-progress.component.html',
  styleUrls: ['./generating-progress.component.scss']
})
export class GeneratingProgressComponent implements OnInit {

  constructor(private canvasService: CanvasService) {

  }

  ngOnInit() {
  }
  position() {
    return this.canvasService.position;
  }
  duration() {
    return this.canvasService.duration;
  }
  value() {
    return this.canvasService.position / this.canvasService.duration * 100;
  }
  step() {
    return this.canvasService.generateStep;
  }

}
