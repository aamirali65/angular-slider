import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'slider',component:SliderComponent
  },
  {
    path:'home',component:HomeComponent
  }
];
