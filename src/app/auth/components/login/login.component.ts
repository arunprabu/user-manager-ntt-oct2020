import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginHandler( loginFormData: any ) {
    console.log(loginFormData);

    this.authService.login(loginFormData.value);
  }

}
