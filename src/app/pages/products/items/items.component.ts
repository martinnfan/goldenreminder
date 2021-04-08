import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products'
import { CartService } from "../../../models/cart.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {}

  // These are parameters for engravings
  engravings = "product.id===1 || product.id===2 || product.id===3 || product.id===4";
  checked = false;
  personalization: string;

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    //const productIdFromRoute = Number(routeParams.get("productId"));
    const productTitleFromRoute = String(routeParams.get("productTitle"));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.title === productTitleFromRoute);
    //this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product) {
    this.product.engraving = this.personalization;
    this.cartService.addToCart(product);
    //window.alert("Your product has been added to the cart!");
    console.log(product);
  }


}
