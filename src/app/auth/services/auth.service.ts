import { Injectable } from '@angular/core';
// import auth feature 
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private ngFireAuth: AngularFireAuth, private router: Router) { }

  signup(formData: any) {
    console.log(formData);

    // send the above data to the back end -- firbase backend
    // get the resp and send it back to the comp
    this.ngFireAuth.createUserWithEmailAndPassword(formData.email, formData.password)
      .then((status) => {
        console.log(status);

        // redirect
        this.router.navigate(['auth', 'login']);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('Signup is over!');
      });
  }

  login(formData: any) {
    console.log(formData);

    this.ngFireAuth.signInWithEmailAndPassword(formData.email, formData.password)
      .then((status) => {
        console.log(status);

        // ideally this should happen from comp
        localStorage.setItem('token', status.user.refreshToken);
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('Login is over!');
      });
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  logout(){
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      console.log('Logged out');
      this.router.navigate(['auth', 'login']);
    }
  }
}
