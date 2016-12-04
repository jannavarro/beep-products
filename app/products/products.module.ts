import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule {}