import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestpageComponent } from './testpage/testpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MissionPageComponent } from './missions/mission-page/mission-page.component';
import { BatmanComponent } from './batman/batman.component';
import { WhoComponent } from './who/who.component';
import {HomepageComponent} from "./V2/homepage/homepage.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'missions',
    component: MissionPageComponent,
  },
  {
    path: 'who',
    component: WhoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
