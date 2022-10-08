import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PlaylistContainerComponent } from './components/playlist/playlist-container/playlist-container.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, SideBarComponent, HeaderComponent, PlaylistContainerComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
