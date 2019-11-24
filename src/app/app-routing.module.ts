import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {_404Component} from "./_404Component/_404.component";


const routes: Routes = [
  // passing only two of all possible properties from Angular's Route interface: path, component
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductDetailComponent},
  // default (404 / error) wildcard route configuration must be the last element in the array of routes:
  {path: '**', component: _404Component}
];

@NgModule({
  // giving above initialised Route-Objects-Array over to the root-Module with its 'forRoot()'-method:
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
