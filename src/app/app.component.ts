import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
      <a [routerLink]="['/']">Home</a>
      &nbsp;
      <a [routerLink]="['/products']" [queryParams]="{category: 'sports'}">Sports products</a>
      &nbsp;
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private _router: Router) {
  }

  showSportingProducts(){
    this._router.navigate(['/products'], {queryParams: {category: 'sports'}});
  }

}
