import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../../image.service';
@Component({
  selector: 'app-image-category-item',
  templateUrl: './image-category-item.component.html',
  styleUrls: ['./image-category-item.component.scss']
})
export class ImageCategoryItemComponent implements OnInit {
  @Input() data; 
  constructor(private imageService: ImageService) { }
  showChild = true
  
  ngOnInit() {
    // console.log('dddddddd', this.data);
  }
  click() {
    
  }
  pictureCategoryId() {
    return this.imageService.categoryId;
  }
  toggleFolder() {
    this.showChild = !this.showChild;
  }
  selectCategory(id, name) {
    // this.pictureCategoryId = id;
    this.imageService.fetchImage({id, pageNo: 1});
  }

}
