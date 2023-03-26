import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})


export class FeaturedProductComponent {
 PCs = [
    {
      name: 'Pro 14"',
      specs: 'Apple m1 Pro islemci',
      specs2: '16 GB RAM / 512 GB SSD',
      img: '../../assets/laptop-frontveiw.png',
      id: 1,
    },
    {
      name: 'Pro 16"',
      specs: 'Apple m1 Pro islemci',
      specs2: '16 GB RAM / 512 GB SSD',
      img: '../../assets/laptop-frontveiw.png',
      id: 2,
    },
    {
      name: 'Pro 13"',
      specs: 'Apple m1 Pro islemci',
      specs2: '16 GB RAM / 512 GB SSD',
      img: '../../assets/laptop-frontveiw.png',
      id: 3,
    },
    {
      name: 'Pro 15"',
      specs: 'Apple m1 Pro islemci',
      specs2: '16 GB RAM / 512 GB SSD',
      img: '../../assets/laptop-frontveiw.png',
      id: 4,
    },
    {
      name: 'Pro 17"',
      specs: 'Apple m1 Pro islemci',
      specs2: '16 GB RAM / 512 GB SSD',
      img: '../../assets/laptop-frontveiw.png',
      id: 5,
    },
    {
      name: 'Pro 18"',
      specs: 'Apple m1 Pro islemci',
      specs2: '16 GB RAM / 512 GB SSD',
      img: '../../assets/laptop-frontveiw.png',
      id: 6,
    },
  ];

  get shuffledItems(): any[] {
    return this.PCs.sort(() => Math.random() - 0.5);
  }

   @Input() limit: number = 1;

}
