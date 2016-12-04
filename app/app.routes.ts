import { CategoriesComponent } from './categories/categories.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'categories/:id/:name', component: CategoriesComponent},
];
