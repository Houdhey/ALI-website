import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestpageComponent } from './testpage/testpage.component';
import player from 'lottie-web';
import { LottieModule } from 'ngx-lottie';
import { LoginPageComponent } from './login-page/login-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { MissionContainerComponent } from './missions/mission-container/mission-container.component';
import { MissionContainer2Component } from './missions/mission-container2/mission-container2.component';
import { MissionContainer3Component } from './missions/mission-container3/mission-container3.component';
import { MissionPageComponent } from './missions/mission-page/mission-page.component';
import { BatmanComponent } from './batman/batman.component';
import { MirrorComponent } from './funnyComps/mirror/mirror.component';
import { WhoComponent } from './who/who.component';
import { ChooseYourCharacterComponent } from './funnyComps/choose-your-character/choose-your-character.component';
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    TestpageComponent,
    LoginPageComponent,
    DashboardComponent,
    CarouselComponent,
    FormulaireComponent,
    MissionContainerComponent,
    MissionContainer2Component,
    MissionContainer3Component,
    MissionPageComponent,
    BatmanComponent,
    MirrorComponent,
    WhoComponent,
    ChooseYourCharacterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    FontAwesomeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    ReactiveFormsModule,
    NgxDropzoneModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
