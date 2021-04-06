import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CartService } from '../../models/cart.service';
import { contactform } from './contact-form';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  public contactform: FormGroup;

  name: string;
  phone: number;
  address: string;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    public dialog: MatDialog,
    ) { }

  //Click on Submit
  onSubmit(): void {
    this.items = this.cartService.clearCart();
  }

  onRemove(): void {
    this.cartService.removeFromCart();
  }

  // This is for the popup module
  openDialog(): void {
    const dialogRef = this.dialog.open(cartpopupcomponent, {
      width: '750px',
      data: {name: this.name,
             phone: this.phone,
             address: this.address}
    });

    this.items = this.cartService.clearCart();
    
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    })
  }

  ngOnInit(): void {
    
  }
}

@Component({
  selector: 'app-cart-contact',
  templateUrl: './contact-form.html',
  styleUrls: ['./cart.component.css']
})
export class cartpopupcomponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<cartpopupcomponent>,
    @Inject(MAT_DIALOG_DATA) public data: contactform) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

}