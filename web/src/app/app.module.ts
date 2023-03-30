import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BottomSectionComponent } from './components/bottom-section/bottom-section.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ShopComponent } from './pages/shop/shop.component';
import { VideoComponent } from './pages/video/video.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';

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
