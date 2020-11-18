import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CartDataService } from '../../services/cart-data.service';

// Decorator
@Component({
  selector: 'app-header', // element selector
  templateUrl: './header.component.html', // html
  styleUrls: ['./header.component.css'] // css
})
export class HeaderComponent implements OnInit {
  // ts
  cartCount: number;

  constructor( private router: Router, private cartDataService: CartDataService, private authService: AuthService ) { }

  ngOnInit(): void {
    this.cartDataService.latestCartItems.subscribe( (cartItems) => {
      console.log(cartItems);
      this.cartCount = cartItems.length;
    });
  }

  gotoCartHandler(){
    // navigate to cart page
    this.router.navigate(['products', 'cart']);
  }

  logoutHandler(){
    this.authService.logout();
  }
}
