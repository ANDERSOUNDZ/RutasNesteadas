import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  dtata : string;

  constructor() { }

  ngOnInit() {

  this.dtata = 'Hello Home Page';
  
  }

}
