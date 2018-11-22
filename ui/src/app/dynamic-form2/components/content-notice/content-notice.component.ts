import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content-notice',
  templateUrl: './content-notice.component.html',
  styleUrls: ['./content-notice.component.scss']
})
export class ContentNoticeComponent implements OnInit {

  @Input() lastAction;
  @Input() count;
  constructor() { }

  ngOnInit() {
  }
  show() {
    return this.lastAction == 'loading' || this.lastAction == 'error' || (this.lastAction == 'success' && this.count == 0);
  }

}
