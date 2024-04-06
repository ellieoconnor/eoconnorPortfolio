import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import {HeaderNavigationComponent} from './components/header-navigation/header-navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AboutComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderNavigationComponent,
        SidebarComponent,
        HeaderNavigationComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
