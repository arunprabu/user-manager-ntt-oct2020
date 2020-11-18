import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// firebase setup
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { DemoIfDirective } from './concepts/directives/demo-if.directive';
import { UsersModule } from './users/users.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductsModule } from './products/products.module';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDI7mYVzSBR_xSdoPtkDq_D4E1_4pzmLno', // this key will not work after a few days
  authDomain: 'hexa-ng-auth-b2.firebaseapp.com',
  databaseURL: 'https://hexa-ng-auth-b2.firebaseio.com',
  projectId: 'hexa-ng-auth-b2',
  storageBucket: '',
  messagingSenderId: '333443086726',
  appId: '1:333443086726:web:a30008031375ca88c05407'
};


// Decorator
// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    DemoIfDirective,
    PageNotFoundComponent,
    SignupComponent,
    LoginComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    UsersModule, // will have feature related comps, modules, directives and feature routing also
    AppRoutingModule, // all app routing
    FormsModule, // ngModel

    AngularFireModule.initializeApp(firebaseConfig),   // will help us connect to firebase app 
    AngularFireAuthModule, // login
    AngularFirestoreModule, // signup
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ], // intercept the http calls
  bootstrap: [AppComponent]  // AppModule should be bootstrapped with a component - AppComponent
})
export class AppModule { }
