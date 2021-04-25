import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { products } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = products;

  // Instatiate form variables
  test = false;
  form: FormGroup;
  options = [
    { id: 1, name: 'Earrings' },
    { id: 2, name: 'Necklaces' },
  ];
  necklaces = "product.id===1 || product.id===2 || product.id===3 || product.id===4 || product.id===5 || product.id===6 || product.id===7";
  earrings = "product.id===10 || product.id===11 || product.id===12 || product.id===13 || product.id===14 || product.id===15 || product.id===16";

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ){
  }


  ngOnInit(): void {
  }



}
