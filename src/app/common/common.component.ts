import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  // Instantiation

  constructor() { }

  ngOnInit(): void {
  }

  show: boolean = true ;
  back: boolean = false;
  earrings: boolean = false;
  necklaces: boolean = false;

  toggleBack () {
    this.show = ! this.show;
    this.back = ! this.back;
    this.necklaces = false;
    this.earrings = false;
  }
  
  toggleEarrings() {
    this.earrings = ! this.earrings;
    this.back = ! this.back;
    this.show = ! this.show;
  }

  toggleNecklaces() {
    this.necklaces = ! this.necklaces;
    this.back = ! this.back;
    this.show = ! this.show;
  }

}

