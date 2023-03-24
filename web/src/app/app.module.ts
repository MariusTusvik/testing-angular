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

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    NavbarComponent,
    FooterComponent,
    BurgerMenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
