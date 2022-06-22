import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoCvComponent } from './info-cv/info-cv.component';

@Component({
  selector: 'cn-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {  

  constructor(public dialog: MatDialog) { }



  ngOnInit(): void {
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(InfoCvComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  goToLinkCoder(url: string) {
    window.open(url, "_blank");
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
