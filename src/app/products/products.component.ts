import { Component, OnInit } from '@angular/core';
import { item } from './item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  item:item[];
  empSelected:Number;

  modifiedtext:string;

  imageObject = [
    {image: "/assets/images/landscape/pic1.jpeg",
      thumbImage:"/assets/images/landscape/pic1.jpeg",
      title: "Pic1"},
    {image: "/assets/images/landscape/pic2.jpeg",
      thumbImage:"/assets/images/landscape/pic2.jpeg",
      title: "Pic2"},
    {image: "/assets/images/landscape/pic3.jpeg",
      thumbImage:"/assets/images/landscape/pic3.jpeg",
      title: "Pic3"},
    {image: "/assets/images/landscape/pic4.jpeg",
      thumbImage:"/assets/images/landscape/pic4.jpeg",
      title: "Pic4"},
    {image: "/assets/images/landscape/pic5.jpeg",
      thumbImage:"/assets/images/landscape/pic5.jpeg",
      title: "Pic5"},
  ];

  constructor() { }

  ngOnInit(): void {
    this.item =[
      {Id:1, Name: "24K Closed Shiny Gold Round Charm", Price:27, Description: "14mm charm, 27mm chain"},
      {Id:2, Name: "24K Shiny Gold Chain", Price:45, Description: " 5mm width, 22 inches length/customizable"},
      {Id:3, Name: "18K Gold-Filled Circle Pendants", Price:42, Description: "Customizable up to 4 letters, available in uppercase and lowercase letters" },
      {Id:4, Name: "18K Gold-Filled Bar Pendants", Price:44, Description: "Customizable up to 6 letters, available in uppercase and lowercase letters"},
      {Id:5, Name: "24K Gold-Filled Lock Pendant", Price:48, Description: "Customizable up to 2 letters, available in uppercase and lowercase letters"},
    ];

    this.empSelected=4;

  }

  onItemSelected(val:any){
    // web api
    this.customFunction(val);

  }

  customFunction(val:any){
    this.modifiedtext="You have selected " + val;
  }

}
