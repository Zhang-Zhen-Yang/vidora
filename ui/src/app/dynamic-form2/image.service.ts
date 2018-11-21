import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';
import { HttpClient } from '@angular/common/http';
import api from './api.js';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  // 图片空间类目
  imageCategory = [];

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
    let req = {
      categroyId: id || '',
      pageSize: 20,
      currentPage: pageNo,
    };
    this.http.post(api.getPictureItems, req).subscribe(
      (res)=>{
        
      },
      (res)=>{

      }
    )

  }
  
} 


// "Http failure during parsing for https://oauth.taobao.com/authorize?response_type=code&client_id=12020783&redirect_uri=https://2015.wonbao.net/authorize/web&scope=promotion,item,usergrade&view=web&state=%2Fgoods%2Fmanage%2Fpicture%2FgetPictureCategory"