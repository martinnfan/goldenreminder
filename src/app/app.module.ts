// Mains
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

// Routing
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Components
import { MaterialModule } from './material.module';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { CommonComponent } from './common/common.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { BottomBarComponent } from './shared/bottom-bar/bottom-bar.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemsComponent } from './pages/products/items/items.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { CartPopupComponent } from './pages/cart/cart-popup/cart-popup.component';

// Extras
import { ErrorComponent } from './error/error.component'; 
import { SlideshowModule } from 'ng-simple-slideshow';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    CommonComponent,
    ErrorComponent,
    TopBarComponent,
    BottomBarComponent,
    ContactUsComponent,
    AboutComponent,
    ItemsComponent,
    ThankyouComponent,
    CartPopupComponent,

    //AppRoutingModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SlideshowModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    //SlickCarouselModule,
    RouterModule.forRoot([
      { path: '**', component: ErrorComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }