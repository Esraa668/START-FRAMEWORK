import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent ,title:'HOME'},
  {path:'about',component:AboutComponent ,title:'ABOUT'},
  {path:'portfolio',component:PortofolioComponent ,title:'PORTFOLIO'},
  {path:'contact',component:ContactComponent ,title:'contact'},
  {path:'**',component:NotFoundComponent ,title:'not found'},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
