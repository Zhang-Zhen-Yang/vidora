import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DynamicFormComponent } from '../dynamic-form2/containers/dynamic-form/dynamic-form.component';
import { CanvasService } from '../service/canvas.service';

interface FormItemOption {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  options?: string[]
 }
 
@Component({
  selector: 'app-actionpanel',
  templateUrl: './actionpanel.component.html',
  styleUrls: ['./actionpanel.component.css']
})
export class ActionpanelComponent implements OnInit, AfterViewInit  {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent
  /* config: FormItemOption[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name'
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option'
    },
    {
      type: 'button',
      label: 'Submit',
      name: 'submit'
    },
    {
      type: 'image',
      label: 'image',
      name: 'image'
    }
  ];*/
  config: FormItemOption[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name'
    },
  ];

  
  
  constructor(private fb: FormBuilder, private canvasService: CanvasService) { }

  ngOnInit() {
    console.log(this.canvasService.options);
    this.canvasService.observables.options.subscribe((e)=>{
      this.config = e['options'];
      console.log(e['options']);
      setTimeout(()=>{
        this.config.forEach((item) => {
          this.form.setValue(item.name, item['value'] || '');
        })
      }, 0)
    });
  }
  onSubmit(data) {
    // console.log(this.myGroup);
  }
  ngAfterViewInit() {
    // alert('dddd');
    let previousValid = this.form.valid; 
    this.form.changes.subscribe((e) => { 
      console.log(e);
      this.canvasService.setOptions(e);
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
  submit(value: {[name: string]: any}) { 
    console.log(value); 
  } 
  
  optsConfig() {
    return this.canvasService.opts;
  }

}
