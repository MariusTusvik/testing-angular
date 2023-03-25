import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent {
 PCs = [
    {name: 'Pro 14"', specs: 'Apple m1 Pro islemci', specs2: "16 GB RAM / 512 GB SSD", img: "../../assets/laptop-frontveiw.png"},
    {name: 'Pro 16"', specs: 'Apple m1 Pro islemci', specs2: "16 GB RAM / 512 GB SSD", img: "../../assets/laptop-frontveiw.png"},
    {name: 'Pro 13"', specs: 'Apple m1 Pro islemci', specs2: "16 GB RAM / 512 GB SSD", img: "../../assets/laptop-frontveiw.png"},
    {name: 'Pro 15"', specs: 'Apple m1 Pro islemci', specs2: "16 GB RAM / 512 GB SSD", img: "../../assets/laptop-frontveiw.png"},
    {name: 'Pro 17"', specs: 'Apple m1 Pro islemci', specs2: "16 GB RAM / 512 GB SSD", img: "../../assets/laptop-frontveiw.png"},
    {name: 'Pro 18"', specs: 'Apple m1 Pro islemci', specs2: "16 GB RAM / 512 GB SSD", img: "../../assets/laptop-frontveiw.png"},

 ]

  }
