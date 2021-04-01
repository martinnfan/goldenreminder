import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../../models/cart.service';
import { contactform } from './contact-form';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  name: string;
  email: string;

  checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkoutForm.value);
    
    this.checkoutForm.reset();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CartComponent, {
      width: '250px',
      data: {name: this.name,
             email: this.email}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.email = result;
    })
  }
}

@Component({
  selector: 'cartpopup-overview-example',
  templateUrl: 'contact-form.html',
})
export class cartpopupcomponent {

  constructor(
    public dialogRef: MatDialogRef<cartpopupcomponent>,
    @Inject(MAT_DIALOG_DATA) public data: contactform) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}