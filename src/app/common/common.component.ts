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

  isShown: boolean = false ; // hidden by default
  
  toggleShow() {

    this.isShown = ! this.isShown;

  }

}

