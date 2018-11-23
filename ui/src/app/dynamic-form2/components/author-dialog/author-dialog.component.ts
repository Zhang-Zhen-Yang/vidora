// 授权弹窗组件
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {AuthorCallbackService} from '../../author-callback.service';

@Component({
  selector: 'app-author-dialog',
  templateUrl: './author-dialog.component.html',
  styleUrls: ['./author-dialog.component.scss']
})
export class AuthorDialogComponent implements OnInit {
  @ViewChild('authorDialog') authorDialog;
  constructor(private aCS: AuthorCallbackService) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.authorDialog.nativeElement.addEventListener('dom-ready',()=>{
      this.authorDialog.nativeElement.openDevTools();

      this.authorDialog.nativeElement.addEventListener('ipc-message',(e)=>{
        switch (e.channel) {
          case 'inited':
            // console.log('initedddddddddd');
            this.aCS.execCallbacks();
          break;
          default: break;
        }
      })
    })

  }

}
