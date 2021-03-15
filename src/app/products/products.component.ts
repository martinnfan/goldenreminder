import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.item =[
      /* Necklaces: Id: 1-7
         Earrings: Id: 8-13 */
      { Id: 1, 
        Name: "Circle Pendant", 
        Price: 42, 
        Description: "14mm charm, 27mm chain",
        Image: ""},
      { Id:2, 
        Name: "24K Shiny Gold Chain", 
        Price:45, 
        Description: " 5mm width, 22 inches length/customizable",
        Image: ""},
      { Id:3, 
        Name: "18K Gold-Filled Circle Pendants", 
        Price:42, 
        Description: "Customizable up to 4 letters, available in uppercase and lowercase letters",
        Image: ""},
      { Id:4, 
        Name: "18K Gold-Filled Bar Pendants", 
        Price:44, 
        Description: "Customizable up to 6 letters, available in uppercase and lowercase letters",
        Image: ""},
      { Id:5, 
        Name: "24K Gold-Filled Lock Pendant", 
        Price:48, 
        Description: "Customizable up to 2 letters, available in uppercase and lowercase letters",
        Image: ""},
    ];

    this.itSelected=3;

  }

  onItemSelected(val:any){
    // web api
    this.customFunction(val);

  }

  customFunction(val:any){
    this.modifiedtext="You have selected " + val;
  }

}
