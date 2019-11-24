import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductDescriptionComponent} from "./product-description/product.description.component";
import {SellerComponent} from "./seller/seller.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'product/:id', component: ProductDetailComponent,
    children: [
      {path: '', component: ProductDescriptionComponent},
      {path: 'seller/:id', component: SellerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
