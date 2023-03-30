import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent {
  scrollToTop() {
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView({ behavior: 'smooth' });
      top = null;
    }
  }
}
