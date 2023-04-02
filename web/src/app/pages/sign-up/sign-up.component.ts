import { Component } from '@angular/core';
import { auth } from '../../../environments/enviroment';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  email: string = '';
  password: string = '';
  userName: string = '';
  firstName: string = '';
  lastName: string = '';

  constructor(private router: Router) {}

  async onSignup() {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        this.email,
        this.password
      );
      const user = result.user;
      const token = await user.getIdToken();
      const { data } = await axios.post(
        `/auth/register`,
        {
          userName: this.userName,
          firstName: this.firstName,
          lastName: this.lastName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.router.navigate(['/shop']);
    } catch (error) {
      console.log(error);
    }
  }
}
