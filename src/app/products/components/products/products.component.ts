import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  productList: any[];

  constructor( private productsService: ProductsService, private cartDataService: CartDataService ) { }

  ngOnInit(): void {
    // hit the service and get the data from service
    this.productList = this.productsService.getProducts();
  }

  addToCartHandler(pdt){
    console.log(pdt);
    this.cartDataService.updateCart(pdt);
  }

}
