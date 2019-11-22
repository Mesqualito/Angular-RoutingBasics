import {Component} from "@angular/core";

@Component({
  selector: 'error',
  template: `<h1 class="error">Will be shown if route is not found!</h1>
             <p>Try every URL after the Hash ('#') in the browsers address bar - you will always get to this Angular module!</p>
  `,
  styles: ['.error { background: red }']
})
export class _404Component {}
