import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // create
  createUser(userFormData): Promise<User> {  // 1. get the data from comp.ts
    console.log(userFormData);

    const addUserPromise = new Promise( (resolve, reject) => {
      this.http.post(this.REST_API_URL, userFormData)
        .toPromise()
        .then((res: User) => {
          console.log(res);
          resolve(res);
        })
        .catch((err: any) => {
          console.log(err);
          reject(err);
        })
        .finally(() => {
          console.log('Its Over');
        });
    });

    return addUserPromise as Promise<User>;
  }

  // get
  getUsers(): Observable<User[]> | Observable<any>{ // get the request from the comp.ts
    console.log('Inside getUsers()');
    // send the req to the rest api
    // REST API URL, Method is GET, HttpClient
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: User[]) => { // get the resp from rest api
        console.log(res);
        // convert to json, filter, sort
        // send the resp back to comp.ts
        return res;
      }), catchError( (err: any) => {
        console.log(err);
        return err;
      }));
  }

  // get user details
  getUserById(id): Observable<User> {  // 1. get the req from comp ts
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
  // work with promise

  // search users

  // filter users




}
