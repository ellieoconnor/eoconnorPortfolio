import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import {HeaderNavigationComponent} from "./components/header-navigation/header-navigation.component";

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderNavigationComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
