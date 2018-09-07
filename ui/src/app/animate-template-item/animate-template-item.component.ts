import { Component, OnInit, Input } from '@angular/core';
import { CanvasService } from '../service/canvas.service';

@Component({
  selector: 'app-animate-template-item',
  templateUrl: './animate-template-item.component.html',
  styleUrls: ['./animate-template-item.component.css']
})
export class AnimateTemplateItemComponent implements OnInit {

  @Input() data;
  constructor(private canvasService: CanvasService) { }

  ngOnInit() {
  }
  loadTemplate(url) {
    // alert(url);
    this.canvasService.loadTemplate(url);
  }

}
