import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingViewerComponent } from './landing-viewer/landing-viewer.component';
import { AppRoutingModule } from '../app-routing.module';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { landingPagesRoutingModule } from './landing-pages-routing.module';


@NgModule({
  declarations: [
    LandingViewerComponent,
    SampleFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    landingPagesRoutingModule
  ],
  exports:[
    LandingViewerComponent
  ]
})
export class LandingPagesModule { }
