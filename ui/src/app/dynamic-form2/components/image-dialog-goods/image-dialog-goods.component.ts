/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-22 09:46:39 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-04 17:18:20
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
  // 选择宝贝类目
  selectCategory(item) {
    this.goodsService.categoryId = item.id;
    this.goodsService.categoryName = item.name;
    this.goodsService.fetchGoods({pageNo: 1});
  }
  // 选择类型
  selectType(item){
    this.goodsService.goodsType = item;
    this.goodsService.fetchGoods({pageNo: 1});
  }
  // 搜索
  search() {
    this.goodsService.fetchGoods({pageNo: 1});
  }
  // 打开宝贝链接
  openExternal(num_iid) {
    window['shell'].openExternal(`https://item.taobao.com/item.htm?id=${num_iid}`)
  }
  // 显示更多宝贝图片
  showMore(num_iid) {
    this.goodsService.getItemInfo({num_iid});
  }
  // 选择图片  
  setGoods(pic_url) {
    this.goodsService.setSelectedGoods({pic_url});
  }
}
