import { Component } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  // logout() {
  //   this.afAuth.signOut();
  // }

}
