import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.scss'],
})
export class BottomSectionComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  emailError = '* Invalid email';
  submit() {
    if (this.email.valid) {
      console.log(`Email: ${this.email.value}`);
    }
  }
}
