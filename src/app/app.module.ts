import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsComponent } from './components/components.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { Menu1Component } from './components/aboutus/components/menu1/menu1.component';
import { Menu2Component } from './components/aboutus/components/menu2/menu2.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AboutusComponent,
    Menu1Component,
    Menu2Component,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
