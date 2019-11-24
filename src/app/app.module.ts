import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {SellerComponent} from "./seller/seller.component";
import {ProductDescriptionComponent} from "./product-description/product.description.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    SellerComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
