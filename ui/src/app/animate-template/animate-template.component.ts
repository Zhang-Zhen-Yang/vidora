import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-animate-template',
  templateUrl: './animate-template.component.html',
  styleUrls: ['./animate-template.component.css']
})
export class AnimateTemplateComponent implements OnInit {
  
  templates: Array<any>
  constructor(public dialog: MatDialog) { 
    this.templates = [
      {
        name: '无标题2',
        url: 'C:/Users/Asus/Desktop/animate/d.html'
      },
      {
        name: 'e',
        url: 'C:/Users/Asus/Desktop/animate/e.html'
      },
      {
        name: 'c2',
        url: 'http://localhost:8080/c2.html'
      },
      {
        name: 'v2a',
        url: 'F:/code/animate cc/c1.html',
      },
      {
        name: 'c2',
        url: 'F:/code/animate cc/c2.html'
      },
      {
        name: 'd',
        url: 'F:/code/animate cc/d.html'
      },
      {
        name: 'bbb',
      },
      {
        name: 'ccc',
      },
      {
        name: 'ddd',
      },
      {
        name: 'eee',
      },
      {
        name: 'aaaaa',
      },
      {
        name: 'bbb',
      },
      {
        name: 'ccc',
      },
      {
        name: 'ddd',
      },
      {
        name: 'eee',
      },
      {
        name: 'aaaaa',
      },
      {
        name: 'bbb',
      },
      {
        name: 'ccc',
      },
      {
        name: 'ddd',
      },
      {
        name: 'eee',
      },
      {
        name: 'aaaaa',
      },
      {
        name: 'bbb',
      },
      {
        name: 'ccc',
      },
      {
        name: 'ddd',
      },
      {
        name: 'eee',
      },
      {
        name: 'aaaaa',
      },
      {
        name: 'bbb',
      },
      {
        name: 'ccc',
      },
      {
        name: 'ddd',
      },
      {
        name: 'eee',
      },
      {
        name: 'aaaaa',
      },
      {
        name: 'bbb',
      },
      {
        name: 'ccc',
      },
      {
        name: 'ddd',
      },
      {
        name: 'eee',
      },
      {
        name: 'aaaaa',
      },
      {
        name: 'bbb',
      },
      {
        name: 'ccc',
      },
      {
        name: 'ddd',
      },
      {
        name: 'eee',
      },
      {
        name: 'aaaaa',
      },
      {
        name: 'bbb',
      },
      {
        name: 'ccc',
      },
      {
        name: 'ddd',
      },
      {
        name: 'eee',
      },
      {
        name: 'aaaaa',
      },
      {
        name: 'bbb',
      },
      {
        name: 'ccc',
      },
      {
        name: 'ddd',
      },
      {
        name: 'eee',
      },
      {
        name: 'aaaaa',
      },
      {
        name: 'bbb',
      },
      {
        name: 'ccc',
      },
      {
        name: 'ddd',
      },
      {
        name: 'eee',
      },
      {
        name: 'aaaaa',
      },
      {
        name: 'bbb',
      },
      {
        name: 'ccc',
      },
      {
        name: 'ddd',
      },
      {
        name: 'eee',
      },
      {
        name: 'aaaaa',
      },
      {
        name: 'bbb',
      },
      {
        name: 'ccc',
      },
      {
        name: 'ddd',
      },
      {
        name: 'eee',
      },
      {
        name: 'eee',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },


    ]
  }

  ngOnInit() {
    /* setTimeout(()=>{
      this.dialog.closeAll();
    }, 5000)*/
  }
  closedialog() {
    this.dialog.closeAll();
  }

}
