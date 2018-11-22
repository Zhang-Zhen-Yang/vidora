import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'pagination-simple',
  templateUrl: './pagination-simple.component.html',
  styleUrls: ['./pagination-simple.component.scss']
})
export class PaginationSimpleComponent implements OnInit {

  @Input() pageNo;
  @Input() hasNext;
  @Output() gotopage = new EventEmitter();
  
  constructor() { 
  }

  ngOnInit() {

  }
  goTo(type) {
    let page = this.pageNo
      if(type == 'prev') {
        if(this.pageNo == 1) {
          return;
        }
        page -= 1;
      } else {
        if(this.hasNext) {
          page += 1;
        }else{
          return;
        }
      }
      this.gotopage.emit(page);
  }

}
