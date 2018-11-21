// 图片选择
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../image.service';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent implements OnInit {

  constructor(private imageService: ImageService) { }


  ngOnInit() {
    
  }
  imageCategory() {
    return this.imageService.imageCategory;
  }

}
