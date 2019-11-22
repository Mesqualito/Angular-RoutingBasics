import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
            <a [routerLink]="['/']">Home</a>
            &nbsp;
            <a [routerLink]="['/product']" skipLocationChange>Product Details</a>
            &nbsp;
            <a [routerLink]="['/nonexistent-view-state']">404 Test</a>
            &nbsp;
            <button (click)="navigateToProductDetail()">Programmatic navigation</button>
            <router-outlet></router-outlet>
            `
})
export class AppComponent {

  // Angular will inject the instance of 'Router' into the '_router'-Variable:
  constructor(private _router: Router) {}

  navigateToProductDetail(){
    // 'skipLocationChange' hides the URL after the Hash '#' in case of Hash-based navigation:
    this._router.navigate(["/product"], { skipLocationChange: true });
  }
}
