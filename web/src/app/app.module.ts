import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShopComponent } from './shop/shop.component';
import { LoadingComponent } from './loading/loading.component';
import { VideoComponent } from './video/video.component';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent,
    BottomSectionComponent,
    FeaturedProductComponent,
    CategoriesComponent,
    ShopComponent,
    LoadingComponent,
    VideoComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
