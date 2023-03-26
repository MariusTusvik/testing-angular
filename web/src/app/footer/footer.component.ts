import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  emailError = '* Invalid email';
  submit() {
    if (this.email.valid) {
      console.log(`Email: ${this.email.value}`);
    }
  }
}
