import { MacbooksService } from '../macbooks.service';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss'],
})
export class FeaturedProductComponent {
  constructor(private mockMacbooks: MacbooksService) {}
  get macbooks() {
    return this.mockMacbooks.mockMacbooks;
  }

  get shuffledItems(): any[] {
    return this.macbooks.sort(() => Math.random() - 0.5);
  }
  @Input() limit: number = 1;
}
