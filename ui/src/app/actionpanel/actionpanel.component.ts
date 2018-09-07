import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DynamicFormComponent } from '../dynamic-form2/containers/dynamic-form/dynamic-form.component';
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
  config: FormItemOption[] = [
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
    }
  ];
   
  myGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myGroup = this.fb.group({
      name: ['Semlinker', [Validators.required, Validators.minLength(2)]],
      location: ['China, CN']
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
      if (this.form.valid !== previousValid) { 
        previousValid = this.form.valid;
        console.log(this.form.valid);
        this.form.setDisabled('submit', !previousValid); 
      } 
    });
    // this.form.setDisabled('submit', true); 
    this.form.setValue('name', 'Todd Motto');
    this.form.setValue('food', 'Hot Dogs');
  } 
  submit(value: {[name: string]: any}) { 
    console.log(value); 
  } 
    

}
