import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  // Step 1: Have the HTML form tag equivalent in the TS
  userForm: FormGroup;
  isSaved: boolean;

  constructor(private userService: UserService) {  // Step 1 of CRUD App: connect to the service using dep injection
    console.log('Inside Constructor');
  }

  ngOnInit(): void { // life cycle hook -- when the comp comes into view
    console.log('Inside ngOnInit');

    // Step 1 continues...
    this.userForm = new FormGroup({
      // Step 2: Create form element equivalents in TS -- Refer HTML for step 3 & 4
      name: new FormControl('arun', Validators.required), // Step 5: Work on Validations
      phone: new FormControl('12412412', Validators.required),
      email: new FormControl('a@b.com', [Validators.required, Validators.email]) // add multiple validators
    });
  }

  async addUserSubmitHandler() {
    console.log('submitted');
    console.log(this.userForm.value); // this.userForm will have form's state

    //  Step 2 of CRUD App: send the data to the service's method
    const status: User = await this.userService.createUser(this.userForm.value);
    console.log(status);
    if (status && status.id) {
      this.isSaved = true;
    }
  }


}
