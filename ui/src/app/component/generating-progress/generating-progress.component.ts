import { Component, OnInit } from '@angular/core';
import { CanvasService } from '../../service/canvas.service';

@Component({
  selector: 'app-generating-progress',
  templateUrl: './generating-progress.component.html',
  styleUrls: ['./generating-progress.component.scss']
})
export class GeneratingProgressComponent implements OnInit {

  inited: boolean = false;
  constructor(private canvasService: CanvasService) {

  }

  ngOnInit() {
    // alert('ddd');
    this.inited = true;
  }
  position() {
    return this.canvasService.position;
  }
  duration() {
    return this.canvasService.duration;
  }
  value() {
    return this.inited ? Math.round(this.canvasService.progressPosition / this.canvasService.duration * 100) : 0;
  }
  step() {
    return this.canvasService.generateStep;
  }

}
