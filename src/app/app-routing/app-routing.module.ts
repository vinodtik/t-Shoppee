import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { HeroComponent } from '../hero/hero.component';
import { ProductDetailsComponent } from '../products/productdetails/productdetails.component';


var routes : Routes = [

    {
      path : '',
      component : HeroComponent
    },
    {
      path : 'home',
      component : HeroComponent
    },
    {
      path : 'products/productdetails/:id',
      component : ProductDetailsComponent
    },
    {
      path : 'products',
      component : ProductsComponent
    }

]
@NgModule({
  exports : [ RouterModule ],
  imports : [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
