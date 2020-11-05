import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  // Step 1: Have the HTML form tag equivalent in the TS
  userForm: FormGroup;

  constructor() {
    console.log('Inside Constructor');
  }

  ngOnInit(): void { // life cycle hook -- when the comp comes into view
    console.log('Inside ngOnInit');

    // Step 1 continues...
    this.userForm = new FormGroup({
      // Step 2: Create form element equivalents in TS -- Refer HTML for step 3 & 4
      name: new FormControl('', Validators.required), // Step 5: Work on Validations
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [ Validators.required, Validators.email ]) // add multiple validators
    });
  }
}
