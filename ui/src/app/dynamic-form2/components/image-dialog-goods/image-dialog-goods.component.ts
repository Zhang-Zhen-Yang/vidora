/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-22 09:46:39 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-23 14:45:07
 */
// 选择图片 宝贝列表
import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../../goods.service';

@Component({
  selector: 'image-dialog-goods',
  templateUrl: './image-dialog-goods.component.html',
  styleUrls: ['./image-dialog-goods.component.scss']
})
export class ImageDialogGoodsComponent implements OnInit {

  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
    if(this.goodsService.goodsCategorys.length == 0) {
      this.goodsService.getSellerCats();
    }
    if(this.goodsService.goodsList.length == 0) {
      this.goodsService.fetchGoods({pageNo: 1});
    }
  }
  typeMenuClosed() {

  }
  selectCategory(item) {
    this.goodsService.categoryId = item.id;
    this.goodsService.categoryName = item.name;
    this.goodsService.fetchGoods({pageNo: 1});
  }
  selectType(item){
    this.goodsService.goodsType = item;
    this.goodsService.fetchGoods({pageNo: 1});
  }
  search() {
    this.goodsService.fetchGoods({pageNo: 1});
  }

}
