import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit, OnDestroy {

  userList: User[];
  userSubscription: Subscription;

  constructor(private userService: UserService) {     // connect to the service
    console.log('inside constructor');
  }

  ngOnInit(): void { // lifecycle hook
    console.log('inside ngOnInit');
    // ideal place for you to have ajax calls -- REST api calls

    this.userSubscription = this.userService.getUsers() // send req to the service
      .subscribe((res: User[]) => { // get the resp from the service
        console.log(res);
        this.userList = res;
      });
  }

  ngOnDestroy() {
    console.log('inside ngOnDestroy');
    // ideal place for you unsubscribe, clear intervals, empty the object, empty the array
    this.userSubscription.unsubscribe();
    if (this.userList && this.userList.length > 0) {
      this.userList.length = 0;
    }
  }

}
