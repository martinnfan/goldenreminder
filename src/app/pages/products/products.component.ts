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
  form: FormGroup;
  options = [
    { id: 1, name: 'Earrings' },
    { id: 2, name: 'Necklaces' },
  ];

  get ordersFormArray() {
    return this.form.controls.orders as FormArray;
  }

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ) {
      this.form = this.formBuilder.group({
        orders: new FormArray([])
      });

      this.addCheckboxes();
     }

  private addCheckboxes() {
    this.options.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }

  ngOnInit(): void {
  }

  submit() {
    const selectedOrdersIds = this.form.value.orders
      .map((checked, i) => checked ? this.options[i].id : null)
      .filter(v => v!== null);
    console.log(selectedOrdersIds);
  }


}
