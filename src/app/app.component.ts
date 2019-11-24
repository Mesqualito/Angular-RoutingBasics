import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <a [routerLink]="['/']">Home</a>
      &nbsp;
      <a [routerLink]="['/product', productId]">Product Details</a>
      &nbsp;
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  productId = 1234;
}
