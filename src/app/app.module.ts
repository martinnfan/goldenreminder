// Mains
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Routing
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Components
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CommonComponent } from './common/common.component';

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

    //AppRoutingModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SlideshowModule,
    NgImageSliderModule,
    //SlickCarouselModule,
    RouterModule.forRoot([
      { path: '**', component: ErrorComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
