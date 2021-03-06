import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './components/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';

// Feature Routing Configuration
const usersRoutes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: AddUserComponent, canActivate: [ AuthGuard ] }, // guard is protecting the path
  { path: 'users/:userId', component: UserDetailsComponent } // URL Param - userId
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes) // registering child routes
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
