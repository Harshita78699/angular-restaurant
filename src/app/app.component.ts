import { Component } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { CrudFormComponent } from './crud-form/crud-form.component';
import data from '../assets/data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-operation-angular';
  dataSource= data;
  displayedColumns: string[] = ['Name', 'Address', 'Contact number', 'service', ''];
  USER_DATA: any;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CrudFormComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
