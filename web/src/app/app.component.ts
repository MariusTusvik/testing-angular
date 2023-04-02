import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web';

  ngOnInit(): void {
    // Hide the loading spinner once the page has finished loading
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
          spinner.style.display = 'none';
        }
      }
    };
  }
  
  constructor(private router: Router) {}

  getCurrentUrl(): string {
    return this.router.url;
  }
}
