import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import api from './api.js';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  // 选项卡索引
  tabIndex: number = 1;

  // 当前的类目id
  categoryId = -1;
  imageCategory = []; // 图片空间类目
  imageList: Array<any> = [];
  imagePageNo:number = 1;
  imagePageSize: number = 50;
  imagelastAction: string = 'loading';
  hastNext: boolean = true; // 是否有下一页
  selectedImage = '';
  imageCallback = (e)=>{};

  goodsType: string = 'onsale';
  goodsCategorys = [];
  goodsList = [];
  goodsPageNo: number = 1;
  goodsPageSize: number = 20;
  selectedGoods = '';


  constructor(private dialog: MatDialog, private http: HttpClient) { 

  }
  openAuthorDialog() {    
    this.fetchImageSpaceCategory();
  }
  // 获取图片空间类目
  fetchImageSpaceCategory() {
    this.http.get(api.getPictureCategory, {}).subscribe(
      (e)=>{
        console.log(e);
        if(e['success']) {
          const categoryList = e['data'];

					let top = categoryList.filter((item)=>{
						return item.picture_category_id == -1;
					})

					var parentList = [];
					categoryList.forEach(function(item) {
						if(item.parent_id == 0 &&item.picture_category_id != -1 ) {
							parentList.push(item);
						}
          })

					this.imageCategoryGetChild(categoryList, parentList);

					let result = parentList;
					if(top && top[0]){
						top[0].children = parentList;
						result = top
					}
          this.imageCategory = result;
          console.log(result);
        } else {
          alert('获取图片空间类目失败');
        }
      },
      (err) => {
        console.log(err);
        alert(err);

        // 打开授权窗口
        this.dialog.open(AuthorDialogComponent);
      }
    )
  } 
  imageCategoryGetChild(categoryList, list) {
    list.forEach((item) => {
      const id = item.picture_category_id;

      const childList = []
      categoryList.forEach(function(i){
        if(i.parent_id == id){
          childList.push(i);
        } 
      })
      if(childList.length > 0) {
        this.imageCategoryGetChild(categoryList, childList)
      }
      item.children = childList;
    });
  }

  // 获取图片空间图片
  fetchImage({id, pageNo=1}) {
    console.log([id, pageNo]);
    if(id) {
      this.categoryId = id;
    }
    
    let req = {
      categroyId: this.categoryId,
      pageSize: this.imagePageSize,
      currentPage: pageNo,
    };
    let params = new HttpParams().set('categoryId', req.categroyId.toString()).set('pageSize', req.pageSize.toString()).set('currentPage', req.currentPage.toString());
    let headers=new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' })

    this.imagelastAction = 'loading';
    this.http.post(api.getPictureItems, req, {headers, params}).subscribe(
      (res)=>{
        if(res['success']) {
          this.imageList = res['data'];
          this.hastNext = res['hastNext'];
          this.imagePageNo = req.currentPage;
          this.selectedImage = '';
          this.imagelastAction = 'success';
        } else {  
          alert('获取图片失败');
          this.imagelastAction = 'error';
        }
      },
      (res)=>{
        alert('获取图片失败（net）');
        this.imagelastAction = 'error';
      }
    )
  }
  // 选择图片
  setSelectedImage(selectedImage) {
    this.selectedImage = selectedImage;
  }
  // 设置选择图片时的回调函数
  setImageCallback(callback) {
    this.imageCallback = callback;
  }
  
} 


// "Http failure during parsing for https://oauth.taobao.com/authorize?response_type=code&client_id=12020783&redirect_uri=https://2015.wonbao.net/authorize/web&scope=promotion,item,usergrade&view=web&state=%2Fgoods%2Fmanage%2Fpicture%2FgetPictureCategory"