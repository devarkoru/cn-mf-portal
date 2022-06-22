import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


/**
 * @title Table dynamically changing the columns displayed
 */
@Component({
  selector: 'mf-portal-selector',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /* Injecting the router into the component. */
  constructor(private router:Router){

  }

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.router.navigate(['angular']);
    // }, 1000);  //1s
  }


}

