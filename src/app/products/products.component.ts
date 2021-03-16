import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from './product';
import { item } from './item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  id: number;

  item:item[];
  itSelected:Number;
  modifiedtext:string;

  products = products;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onItemSelected(val:any){
    // web api
    this.customFunction(val);

  }

  customFunction(val:any){
    this.modifiedtext="You have selected " + val;
  }

}
