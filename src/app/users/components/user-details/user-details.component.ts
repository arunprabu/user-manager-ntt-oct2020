import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  userData: User;
  duplicateUserData: User;
  isUpdated: boolean;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    console.log('inside Constructor');
  }

  ngOnInit(): void {  // life cycle hook
    console.log('inside ngOnInit');

    // Read URL param in angular
    const USER_ID = this.route.snapshot.paramMap.get('userId');

    // 1. connect to service using dep injection -- refer constructor
    // 2. send a req to the service method
    this.userService.getUserById(USER_ID)
      .subscribe((res: User) => {  // 3. get the resp from service
        console.log(res);
        this.userData = res;
      });
  }

  editModalOpenHandler() {
    this.duplicateUserData = JSON.parse(JSON.stringify(this.userData));
    this.isUpdated = false;
  }

  updateBtnHandler() {
    console.log(this.duplicateUserData);
    this.userService.updateUser(this.duplicateUserData)
      .subscribe((res: User) => {
        console.log(res);
        if (res && res.id) {
          this.isUpdated = true;
          this.userData = res;
        }
      });
  }

}
