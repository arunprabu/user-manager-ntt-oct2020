import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit, OnDestroy {

  cartItemList: any[];
  cartSubscription: Subscription;

  constructor(private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.cartSubscription = this.cartDataService.latestCartItems.subscribe((cartItems: any) => {
      console.log(cartItems);
      this.cartItemList = cartItems;
    });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    // if (this.cartItemList && this.cartItemList.length > 0) {
    //   this.cartItemList.length = 0;
    // }
  }

}
