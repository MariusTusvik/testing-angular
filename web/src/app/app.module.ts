import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { ProductWithInfoComponent } from './product-with-info/product-with-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    NavbarComponent,
    FooterComponent,
    BurgerMenuComponent,
    BuyNowComponent,
    ScrollToTopComponent,
    BottomSectionComponent,
    FeaturedProductComponent,
    ProductWithInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
