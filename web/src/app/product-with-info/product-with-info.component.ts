import { Component, Input } from '@angular/core';
import { MacbooksService } from 'app/macbooks.service';

@Component({
  selector: 'app-product-with-info',
  templateUrl: './product-with-info.component.html',
  styleUrls: ['./product-with-info.component.scss'],
})
export class ProductWithInfoComponent {
  @Input() showRedirect: boolean = true;
  @Input() limit: number = 1;

  constructor(private mockMacbooks: MacbooksService) {}
  get macbooks() {
    return this.mockMacbooks.mockMacbooks;
  }

  get shuffledItems(): any[] {
    return this.macbooks.sort(() => Math.random() - 0.5);
  }
}
