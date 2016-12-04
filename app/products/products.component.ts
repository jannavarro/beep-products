import { ProductsService } from './products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<any>;
  searchStr: string;

  constructor(private readonly _productsService: ProductsService) {
  }

  ngOnInit() {
    this._productsService.searchMovies(this.searchStr).subscribe(res => {
      this.products = res.results;
    })
  }
}
