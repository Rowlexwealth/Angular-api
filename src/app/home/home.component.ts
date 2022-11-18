import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  headername = 'Angular Tutorial';

  salary = 1000;

  // Property binding
  isdisabled = true;
  functionclicked(name:string){
    alert(name)
  }

  // style binding
  colorname = 'red'

  // Event Binding
  functionclick(){
    alert('Event Binding')
  }

  functionsclick(name:string){
    alert(name)
  }

  // NgClass, NgStyle
  classname = 'Rowland';
  stylevalue = {"color": "Blue", "font-size":"40px"}

  colors = ['green', 'red', 'yellow', 'black']

  // ngif
  age = 500;

  ngOnInit(): void {
  }

}
