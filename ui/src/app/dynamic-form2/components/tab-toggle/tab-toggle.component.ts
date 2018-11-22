import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { mixinTabIndex } from '@angular/material';

@Component({
  selector: 'tab-toggle',
  templateUrl: './tab-toggle.component.html',
  styleUrls: ['./tab-toggle.component.scss']
})
export class TabToggleComponent implements OnInit {

  @Input() tabIndex
  @Input() list
  @Output() setIndex = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  setActiveIndex(index){
    this.setIndex.emit(index);
  }

}
