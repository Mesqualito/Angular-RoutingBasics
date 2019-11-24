import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'product',
  template: '<h1 class="product">Product Detail for Product: {{productId}}</h1>',
  styles: ['.product { background: cyan }']
})
export class ProductDetailComponent {
  productId: string;

  constructor(route: ActivatedRoute) {
    route.paramMap.subscribe(params => this.productId = params.get('id'));
  }
}
