import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-with-info',
  templateUrl: './product-with-info.component.html',
  styleUrls: ['./product-with-info.component.scss']
})
export class ProductWithInfoComponent {
@Input() showInfo: boolean = true;

}
