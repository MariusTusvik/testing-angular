import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { auth } from 'environments/enviroment';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  constructor(
    private location: Location,
    private snackbar: MatSnackBar,
    private afAuth: AngularFireAuth
  ) {}

  goBack(): void {
    this.location.back();
  }

  email: string = '';
  password: string = '';

  showSnackbar() {
    this.snackbar.open('Invalid Credentials', 'Dismiss', {
      duration: 3000,
    });
  }

  isLoggedIn = false;
  currentUser: any;

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      this.isLoggedIn = !!user;
      if (this.isLoggedIn) {
        this.currentUser = user;
        console.log(user);
      }
    });
  }

  async onLogin() {
    try {
      if (!this.email || !this.password) {
        console.log('invalid credentials');
        return;
      }
      const result = await signInWithEmailAndPassword(
        auth,
        this.email,
        this.password
      );
      this.isLoggedIn = true;
      this.currentUser = result.user;
      console.log('result', result);
    } catch (error) {
      console.log(error);
      this.showSnackbar();
    }
  }
}

