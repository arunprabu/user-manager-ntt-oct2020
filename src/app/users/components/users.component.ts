import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  userList: any[];

  constructor( private userService: UserService) {     // connect to the service
    console.log('inside constructor');
  }

  ngOnInit(): void { // lifecycle hook
    console.log('inside ngOnInit');
    // ideal place for you to have ajax calls -- REST api calls

    this.userService.getUsers() // send req to the service
      .subscribe( (res: any) => { // get the resp from the service
        console.log(res);
        this.userList = res;
      });
  }

}
