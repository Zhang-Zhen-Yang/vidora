import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorCallbackService {
  dialogRef = null;
  callbackList = [];
  constructor() { }
  execCallbacks() {
    this.callbackList.forEach((item)=>{
      if(item) {
        try{
          item();
        }catch(e){
          console.error(e);
        }
      }
    })
    this.callbackList = [];
    if(this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
  }
}
