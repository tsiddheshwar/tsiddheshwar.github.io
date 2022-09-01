import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolidatedResumeComponent } from './resume-components/consolidated-resume/consolidated-resume.component';
import { LandingViewerComponent } from './landing-pages/landing-viewer/landing-viewer.component';

const routes: Routes = [
  { path: '', component: ConsolidatedResumeComponent },
  { path: 'skills', component: ConsolidatedResumeComponent },
  { path: 'workdone', component: ConsolidatedResumeComponent },
  { path: 'tools', component: ConsolidatedResumeComponent },
  { path: 'landingpages', component: LandingViewerComponent },
  { path: 'contact', component: ConsolidatedResumeComponent },
  { path: '#', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
