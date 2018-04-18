import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  size:number = 2;
  private greeting: string = 'Hello World';

  divClass: string;
  isBig: boolean = false;
  isDev:boolean = false;
  ngClass:any = {
      a:false,
      b:true,
      c:false
  };
  divStyle: any = {
      color: 'blue',
      background:'yellow'
  }
  constructor() { }

  ngOnInit() {
      setTimeout(() => {
          this.divClass = "a b c";
          this.ngClass = {
               a:true,
               b:false,
               c:true
          };
          this.isDev = true;
          this.divStyle = {
              color: 'yellow',
              background: 'blue'
          };
      },3000);
      setTimeout(() => {
          this.isBig = true;
      },5000);
  }

}
