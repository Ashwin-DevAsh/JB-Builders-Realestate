import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"services",
    component:ServiceComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:"**",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
