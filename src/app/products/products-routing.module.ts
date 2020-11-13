import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule } from '@angular/router';

// configure the routes
const productsRoutes = [
  {
    path: 'products', children: [
      { path: '', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: ':pdtId', component: ProductDetailsComponent } // URL Param: pdtId
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes) // registering the child routes
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
