import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CanvasService } from '../../service/canvas.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-animate-template-item',
  templateUrl: './animate-template-item.component.html',
  styleUrls: ['./animate-template-item.component.css']
})
export class AnimateTemplateItemComponent implements OnInit {

  @Input() data;
  @Output() closedialog = new EventEmitter();
  constructor(private canvasService: CanvasService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  loadTemplate(url) {
    // alert(url);
    if(!url) {
      alert('无效的模板地址');
      return;
    }
    this.canvasService.loadTemplate(url);
    this.closedialog.emit();
  }
  imgSrc(src) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }

}
