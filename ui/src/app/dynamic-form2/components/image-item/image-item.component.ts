import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../../image.service';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements OnInit {
  @Input() data
  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }
  select(img) {
    this.imageService.setSelectedImage(img);
  }

}
