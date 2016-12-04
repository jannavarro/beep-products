import { CategoriesComponent } from './categories/categories.component';
import { appRoutes } from './app.routes';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    CategoriesComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
