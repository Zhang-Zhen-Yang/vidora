import { Component, OnInit, Input, ViewChild, AfterViewInit} from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form2/containers/dynamic-form/dynamic-form.component';
import { CanvasService } from '../service/canvas.service';

@Component({
  selector: 'app-actionpanel-item',
  templateUrl: './actionpanel-item.component.html',
  styleUrls: ['./actionpanel-item.component.scss']
})
export class ActionpanelItemComponent implements OnInit {
  @Input() config;
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent
  constructor(private canvasService: CanvasService) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    let previousValid = this.form.valid; 
    this.form.changes.subscribe((e) => { 
      console.log(e);
      this.canvasService.setOpts(e);
      if (this.form.valid !== previousValid) { 
        previousValid = this.form.valid;
        console.log(this.form.valid);
        // this.form.setDisabled('submit', !previousValid); 
      } 
    });
    setTimeout(()=>{
      // this.form.setDisabled('submit', true);
      // this.form.setValue('name', 'Todd Motto');
      // this.form.setValue('food', 'Hot Dogs');
      // this.form.setValue('image', 'http://img5q.duitang.com/uploads/item/201411/30/20141130225105_Xe3cW.thumb.700_0.png');
    }, 0) 
  } 

}
