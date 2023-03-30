import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { VideoComponent } from './pages/video/video.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LogInComponent } from './pages/log-in/log-in.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'video', component: VideoComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'login', component: LogInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
