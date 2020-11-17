import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  signupHandler( signupFormData: NgForm ){
    // get the data from the form
    console.log(signupFormData.value);
    this.authService.signup(signupFormData.value)
  }

}
