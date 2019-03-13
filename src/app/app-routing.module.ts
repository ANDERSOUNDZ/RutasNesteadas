import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { Menu1Component } from './components/aboutus/components/menu1/menu1.component';
import { Menu2Component } from './components/aboutus/components/menu2/menu2.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
      children:[
        {path: '', redirectTo: 'home', pathMatch:'full'},
        {path:'about-us-menu1',component: Menu1Component},
        {path:'about-us-menu2',component: Menu2Component}
    ]
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: '**',
    redirectTo:''
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
