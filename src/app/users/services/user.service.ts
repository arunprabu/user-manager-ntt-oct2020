import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users/';

  constructor( private http: HttpClient) { }

  // create
  createUser( userFormData ){  // 1. get the data from comp.ts
    console.log(userFormData);

    // 2. send the data to rest api
    // 2.1. What's the REST API URL? 'http://jsonplaceholder.typicode.com/users/'
    // 2.2. With what HTTP method we will hit the REST API? POST
    // 2.3. What is the client tool to connect to REST API? HttpClient
    return this.http.post(this.REST_API_URL, userFormData)
      .pipe( map( (res: any) => { // 3. get the resp from rest api
        console.log(res);
        // 4. send the resp back to comp.ts
        return res;
      }));
  }

  // get
  getUsers(){ // get the request from the comp.ts
    // send the req to the rest api
    // REST API URL, Method is GET, HttpClient
    return this.http.get(this.REST_API_URL)
      .pipe( map( (res: any) => { // get the resp from rest api
        console.log(res);
        // send the resp back to comp.ts
        return res;
      }));
  }


}
