import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import api from './api.js';
import {AuthorService} from './author.service';


@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  goodsType: string = '出售中';
  searchValue = ''
  goodsCategorys = [];
  selectedGoods = '';
  
  goodsList = [];
  count = 0;
  lastAction = 'loading';
  pageNo = 1;
  pageSize = 10;
  categoryId = 'all';
  categoryName = '全部分类';
  constructor(private dialog: MatDialog, private http: HttpClient, private authorService: AuthorService) {

  }


  // 宝贝
  // 获取宝贝类目
  getSellerCats(){
    this.http.post(api.getSellerCats,{}).subscribe(
      (res)=>{
        console.log(res);
        if(res['data']) {
          this.goodsCategorys = res['data'].map((item, index)=>{
            item.name = item.name.replace('&nbsp;', ' ');
            return item;
          });
        } else {
          
        }
      },
      (err)=>{
        alert('获取宝贝类目失败（net）');
        this.authorService.checkAuthor(err, ()=>{
          this.getSellerCats;
        })
      }
    )
  }
  // 获取宝贝列表
  fetchGoods({pageNo = 1}){
    this.lastAction = 'loading';
    let req = {
      pageNo: pageNo || this.pageNo,
      pageSize: this.pageSize,
      type: this.goodsType == '出售中' ? 'onsale' : 'instock',
      keyword: this.searchValue,
      cid: this.categoryId,
      fields: '',
    };
    let params = new HttpParams();
    for(let i in req){
      params = params.set(i, req[i])
    }
    // let headers=new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' })

    let apiUrl = api.getItems;
    this.http.post(apiUrl,params).subscribe(
      (res)=>{
        if(res['items']) {
          this.goodsList = res['items'].map((item,index)=>{
            return {
              title: item.title,
              pic_url: item.picUrl,
              price: item.price,
              prev_price: item.price,
              num_iid:item.numIid,
              num: item.num,
            }
          });
          this.count = res['totalCount'];
          this.pageNo = req.pageNo;
          this.lastAction = 'success';
        } else {
          alert('获取宝贝列表出错');
          this.lastAction = 'error';
          this.authorService.checkAuthor(res, ()=>{
            this.fetchGoods({pageNo});
          });
        }
      },
      (res)=>{
        alert('获取宝贝列表出错');
        this.lastAction = 'error';
        this.authorService.checkAuthor(res, ()=>{
          this.fetchGoods({pageNo});
        });
      }
    )
  }


}
