import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  displayContents = true;
  count=0;
  counter = [];

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick(){
    this.displayContents = !this.displayContents;
    this.count++;
    this.counter.push(this.count);
  }

  getDisplayContents(){
    return this.displayContents;
  }

}
