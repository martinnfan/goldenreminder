import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CommonComponent } from './common/common.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ItemsComponent } from './products/items/items.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent }, 
  { path: "items/:productId", component: ItemsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'common', component: CommonComponent },
  { path: 'thankyou', component: ThankyouComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
