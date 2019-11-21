import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";


const routes: Routes = [
  // passing only two of all possible properties from Angular's Route interface: path, component
  {path: '', component: HomeComponent},
  {path: 'product', component: ProductDetailComponent}
];

@NgModule({
  // giving above initialised Route-Objects-Array over to the root-Module with its 'forRoot()'-method:
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
