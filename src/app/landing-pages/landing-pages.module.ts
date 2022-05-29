import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgsFanpageComponent } from './mgs-fanpage/mgs-fanpage.component';
import { LandingViewerComponent } from './landing-viewer/landing-viewer.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MgsFanpageComponent,
    LandingViewerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    LandingViewerComponent
  ]
})
export class LandingPagesModule { }
