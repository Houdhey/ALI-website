import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestpageComponent } from './testpage/testpage.component';
import player from 'lottie-web';
import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [AppComponent, TestpageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
