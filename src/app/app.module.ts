import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ResumeComponentsModule } from './resume-components/resume-components.module';
import { LandingPagesModule } from './landing-pages/landing-pages.module';
import { UnderConstructionPopupComponent } from './under-construction-popup/under-construction-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    UnderConstructionPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResumeComponentsModule,
    LandingPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
