import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
constructor(private auth: AngularFireAuth) {}

email: string = '';
password: string = '';

onSubmit() {
  this.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(() => {
      // Log in successful, redirect to home page
    })
    .catch((error) => {
      console.log(error);
    });
}
}