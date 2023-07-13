import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { FilsComponent } from './fils/fils.component';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { NgstylecompoenntComponent } from './directives/ngstylecompoennt/ngstylecompoennt.component';
import { HttpClientModule } from '@angular/common/http';
import { EmbaucherComponent } from './cvTech/embaucher/embaucher.component';
import { Page2Component } from './page2/page2.component';
import { ROUTING } from './app-rooting';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    FilsComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    NgstylecompoenntComponent,
    EmbaucherComponent,
    Page2Component,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailComponent,
    LoginComponent,
    MainComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
