import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signupHandler( signupFormData: NgForm ){
    // get the data from the form
    console.log(signupFormData);
  }

}
