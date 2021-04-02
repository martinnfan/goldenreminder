import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { products } from "../pages/products/products";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {}
  items = [];

  /*
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }*/

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  removeFromCart() {
    this.items.pop();
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
