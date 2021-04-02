import { Component, OnInit } from '@angular/core';
import { products } from '../pages/products/products';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  products = products;

  // Instantiation

  constructor() { }

  ngOnInit(): void {
  }

}