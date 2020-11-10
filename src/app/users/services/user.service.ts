import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // create
  createUser(userFormData) {  // 1. get the data from comp.ts
    console.log(userFormData);

    // 2. send the data to rest api
    // 2.1. What's the REST API URL? 'http://jsonplaceholder.typicode.com/users/'
    // 2.2. With what HTTP method we will hit the REST API? POST
    // 2.3. What is the client tool to connect to REST API? HttpClient
    return this.http.post(this.REST_API_URL, userFormData)
      .pipe(map((res: User) => { // 3. get the resp from rest api
        console.log(res);
        // 4. send the resp back to comp.ts
        return res;
      }));
  }

  // get
  getUsers() { // get the request from the comp.ts
    // send the req to the rest api
    // REST API URL, Method is GET, HttpClient
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: User[]) => { // get the resp from rest api
        console.log(res);
        // send the resp back to comp.ts
        return res;
      }));
  }

  // get user details
  getUserById(id) {  // 1. get the req from comp ts
    console.log('Inside getUserById in Service');
    // 2. send the req to the rest api
    // 2.1 what's the URL?
    const USER_DETAILS_URL = `${this.REST_API_URL}/${id}`;

    // 2.2. What's the HTTP method? -- GET
    // 2.3. What's the Http Client tool? - HttpClient
    return this.http.get(USER_DETAILS_URL)
      .pipe(map((res: User) => {
        console.log(res);
        return res;
      }));
  }

  // update user
  updateUser(userData) {
    console.log(userData);

    const UPDATE_REST_API_URL = `${this.REST_API_URL}/${userData.id}`;
    return this.http.put(UPDATE_REST_API_URL, userData)
      .pipe(map((res: User) => {
        console.log(res);
        return res;
      }));
  }

  // delete user

  // search users

  // filter users




}
