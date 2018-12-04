import { Injectable } from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
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

  // 宝贝主图
  goodsMainPics = {};
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar,private http: HttpClient, private authorService: AuthorService) {

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
          this.snackBar.open('获取宝贝类目失败','ok', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
        }
      },
      (err)=>{
        this.snackBar.open('获取宝贝类目失败(net)','ok', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        // alert('获取宝贝类目失败（net）');
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
          this.selectedGoods = '';
        } else {
          // alert('获取宝贝列表出错');
          this.snackBar.open('获取宝贝列表出错','ok', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
          this.lastAction = 'error';
          this.authorService.checkAuthor(res, ()=>{
            this.fetchGoods({pageNo});
          });
        }
      },
      (res)=>{
        this.snackBar.open('获取宝贝列表出错','ok', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        // alert('获取宝贝列表出错');
        this.lastAction = 'error';
        this.authorService.checkAuthor(res, ()=>{
          this.fetchGoods({pageNo});
        });
      }
    )
  }
  // 获取宝贝详情
  getItemInfo({num_iid}){
    if(!num_iid){
      return;
    }
    let goodsMainPicsData = this.goodsMainPics[`n${num_iid}`];
    if(!goodsMainPicsData || (goodsMainPicsData && goodsMainPicsData.lastAction == 'error')) {
      this.goodsMainPics[`n${num_iid}`] = goodsMainPicsData || { lastAction: 'loading' };
      if(this.goodsMainPics[`n${num_iid}`].msg == '没有权限获取该商品信息') {
        return;
      }
      let req = {
        numIid: num_iid,
        fields: 'pic_url,item_img,product_id',
      }
      this.goodsMainPics[`n${num_iid}`].lastAction = 'loading';
     

      let params = new HttpParams();
      for(let i in req){
        params = params.set(i, req[i])
      }

      this.http.post(api.getItemInfo,params).subscribe(
        (res)=>{
          console.log(res);
          if(res['success']) {
            
            this.goodsMainPics[`n${num_iid}`] = {...this.goodsMainPics[`n${num_iid}`], lastAction: 'success', list: res['item'].itemImgs}
          } else {
            this.goodsMainPics[`n${num_iid}`].lastAction = 'error';
            this.goodsMainPics[`n${num_iid}`].msg = res['msg'];
          }

        },
        (res)=>{
          this.snackBar.open('获取宝贝列表出错','ok', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
          // alert('获取宝贝列表出错');
          this.lastAction = 'error';
          this.authorService.checkAuthor(res, ()=>{
            this.getItemInfo({num_iid});
          });
        }
      )



      /* http.post(api.getItemInfo, req).then((res)=>{
        if(res.status == 200) {
          // console.log(res.data);
          if(res.data.success) {
            state.goodsMainPics[`n${num_iid}`] = {...state.goodsMainPics[`n${num_iid}`], lastAction: 'success', list: res.data.item.itemImgs}
          } else {
            state.goodsMainPics[`n${num_iid}`].lastAction = 'error';
            state.goodsMainPics[`n${num_iid}`].msg = res.data.msg;
          }
          
        } else {
          state.goodsMainPics[`n${num_iid}`].lastAction = 'error';
        }
        Vue.set(state, 'goodsMainPics', {...state.goodsMainPics});
      })*/
    }
  }
  setSelectedGoods({pic_url}) {
    this.selectedGoods = pic_url;
  }


}
