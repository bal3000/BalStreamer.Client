import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';

import { chromecastsReducer } from './state/reducers/chromecasts.reducer';

import { AppShellModule } from './app-shell/app-shell.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ChromecastService } from './services/chromecast.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppShellModule,
    StoreModule.forRoot({ chromecasts: chromecastsReducer }),
    EffectsModule.forRoot([]),
  ],
  providers: [ChromecastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
