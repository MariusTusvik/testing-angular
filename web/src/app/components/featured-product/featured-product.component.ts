import { Component, Input } from '@angular/core';
import { MacbooksService } from 'app/macbooks.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss'],
})
export class FeaturedProductComponent {
  @Input() showRedirect: boolean = true;
  @Input() limit: number = 1;
  @Input() showInfo: boolean = false;
  @Input() showFeature: boolean = false;
  constructor(private mockMacbooks: MacbooksService) {}
  get macbooks() {
    return this.mockMacbooks.mockMacbooks;
  }

  get shuffledItems(): any[] {
    return this.macbooks.sort(() => Math.random() - 0.5);
  }
}
