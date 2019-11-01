import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-component',
  templateUrl: './screen-component.component.html',
  styleUrls: ['./screen-component.component.css']
})
export class ScreenComponent implements OnInit {
  directory = "";
  constructor() { }

  ngOnInit() {
  }

}
