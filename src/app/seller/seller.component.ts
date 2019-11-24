import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'seller',
  template: 'The seller is Mary Lou, id {{sellerId}}',
  styles: [':host {background: yellow}']
})
export class SellerComponent {
  sellerId: string;

  constructor(route: ActivatedRoute) {
    this.sellerId = route.snapshot.paramMap.get('id');
  }
}
