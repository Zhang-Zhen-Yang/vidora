import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AnimateTemplateComponent } from '../animate-template/animate-template.component';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  showTemplateDialog() {
    const dialogRef = this.dialog.open(AnimateTemplateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

