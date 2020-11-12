import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { CartComponent } from '../cart/cart.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

// configure the routes
const productsRoutes = [
  {
    path: 'products', children: [
      { path: '', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: '1', component: ProductDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductsRoutingModule { }
