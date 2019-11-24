import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'product',
  template: '<h1 class="product">Product Detail for Product: {{productId}}</h1>',
  styles: ['.product { background: cyan }']
})
export class ProductDetailComponent {
  productId: string;

  // the 'ActivatedRoute'-object is injected into the constructor of this component:
  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
  }

}
