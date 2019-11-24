import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'product',
  template: '<h1 class="product">Showing Products in category \'{{productCategory}}\'</h1>',
  styles: ['.product { background: cyan }']
})
export class ProductDetailComponent {
  productCategory: string;

  constructor(route: ActivatedRoute) {
    this.productCategory = route.snapshot.queryParamMap.get('category');
  }
}
