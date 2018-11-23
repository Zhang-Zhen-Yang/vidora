// 图片选择
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../image.service';
import { GoodsService } from '../../goods.service';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent implements OnInit {

  collection = [];
  constructor(private imageService: ImageService, private goodsService: GoodsService) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }


  ngOnInit() {
    if(this.imageService.imageList.length == 0) {
      this.imageService.fetchImage({id: null, pageNo: 1})
    }
    if(this.imageService.imageCategory.length == 0){
      this.imageService.fetchImageSpaceCategory();
    }
  }
  imageCategory() {
    return this.imageService.imageCategory;
  }
  imageList() {
    return this.imageService.imageList;
  }
  // 跳页
  goTo(pageNo) {
    this.imageService.fetchImage({id: null, pageNo})
  }
  confirm() {
    this.imageService.imageCallback(this.imageService.selectedImage);
  }
  setIndex(index) {
    this.imageService.tabIndex = index;
  }
  goodsGoTo(pageNo) {
    this.goodsService.fetchGoods({pageNo});
  }
}
