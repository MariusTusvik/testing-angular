import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  get menuOpenClass() {
    return this.menuOpen ? 'menu-open' : '';
  }
  home = 'Home';

  isLoggedIn = false;
  currentUser: any;
  

}
