import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.css']
})
export class Form01Component implements OnInit {

  constructor() { }

  model = {
  	firstname: "",
  	lastname:  ""
  }
  ngOnInit() {
  }

}
