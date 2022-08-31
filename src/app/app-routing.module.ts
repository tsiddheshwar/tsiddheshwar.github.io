import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MgsFanpageComponent } from './landing-pages/mgs-fanpage/mgs-fanpage.component';
import { SampleFormComponent } from './landing-pages/sample-form/sample-form.component';
import { ConsolidatedResumeComponent } from './resume-components/consolidated-resume/consolidated-resume.component';
import { LandingViewerComponent } from './landing-pages/landing-viewer/landing-viewer.component';
import { CertificatesComponent } from './certificates/certificates.component';

const routes: Routes = [
  { path: '', component: ConsolidatedResumeComponent },
  { path: 'mgsfanpage', component: MgsFanpageComponent },
  { path: 'sampleform', component: SampleFormComponent },
  { path: 'skills', component: ConsolidatedResumeComponent },
  { path: 'workdone', component: ConsolidatedResumeComponent },
  { path: 'tools', component: ConsolidatedResumeComponent },
  { path: 'landingpages', component: LandingViewerComponent },
  { path: 'contact', component: ConsolidatedResumeComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: '#', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
