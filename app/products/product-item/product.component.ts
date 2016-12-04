import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  template: 'product',
  templateUrl: './product.component.html',
  styleUrls: [
    './product.component.css'
  ]
})
export class ProductComponent {
  @Input() product: Object;
}