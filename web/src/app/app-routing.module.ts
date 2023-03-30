import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { TabsComponent } from './tabs/tabs.component';
import { VideoComponent } from './video/video.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'video', component: VideoComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'categories', component: CategoriesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
