import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { necklaces } from './necklaces';
import { item } from './item';
import { earrings } from './earrings';

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

  necklaces = necklaces;
  earrings = earrings;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  show: boolean = true ;
  back: boolean = false;
  earring: boolean = false;
  necklace: boolean = false;

  toggleBack () {
    this.show = ! this.show;
    this.back = ! this.back;
    this.necklace = false;
    this.earring = false;
  }
  
  toggleEarrings() {
    this.earring = ! this.earring;
    this.back = ! this.back;
    this.show = ! this.show;
  }

  toggleNecklaces() {
    this.necklace = ! this.necklace;
    this.back = ! this.back;
    this.show = ! this.show;
  }

  onItemSelected(val:any){
    // web api
    this.customFunction(val);

  }

  customFunction(val:any){
    this.modifiedtext="You have selected " + val;
  }

  tableData_necklace = this.necklaces.reduce((acc, col, i) => {
    if (i % 2 == 0) {
        acc.push({column1: col});
    } else {
        acc[acc.length - 1].column2 = col;
    }       
    return acc;
  }, []);

  tableData_earring = this.earrings.reduce((acc, col, i) => {
    if (i % 2 == 0) {
        acc.push({column1: col});
    } else {
        acc[acc.length - 1].column2 = col;
    }       
    return acc;
  }, []);

}
