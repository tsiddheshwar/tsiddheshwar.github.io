import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolidatedResumeComponent } from './resume-components/consolidated-resume/consolidated-resume.component';
import { LandingViewerComponent } from './landing-pages/landing-viewer/landing-viewer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MyWorkSamplesComponent } from './components/my-work-samples/my-work-samples.component';


const routes: Routes = [
  { path: '', component: ConsolidatedResumeComponent },
  { path: 'skills', component: ConsolidatedResumeComponent },
  { path: 'workdone', component: ConsolidatedResumeComponent },
  { path: 'tools', component: ConsolidatedResumeComponent },
  { path: 'mywork', component: LandingViewerComponent },
  { path: 'contact', component: ConsolidatedResumeComponent },
  { path: '#', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'myworksamples', component: MyWorkSamplesComponent,
    children: [
      { path: '', component: NotFoundComponent },
      { path: 'fileUpload', component: NotFoundComponent },
      { path: 'variables', component: NotFoundComponent },
      { path: 'commands', component: NotFoundComponent },
      { path: 'windowMenus', component: NotFoundComponent },
      { path: 'main', component: NotFoundComponent },
      { path: 'enhancements', component: NotFoundComponent }
    ]
  },
  {
    path: 'fileGeneration', component: NotFoundComponent,
    children: [
      { path: 'generateVariables', component: NotFoundComponent },
      { path: 'generateLabels', component: NotFoundComponent },
      { path: 'generateCommands', component: NotFoundComponent },
      { path: 'generateWindows', component: NotFoundComponent },
      { path: 'generateEnhancements', component: NotFoundComponent },
      { path: 'generateMain', component: NotFoundComponent },
      { path: 'generateMethods', component: NotFoundComponent },
      { path: 'generateMacros', component: NotFoundComponent },
      { path: 'generateNonWindowMenus', component: NotFoundComponent },
      { path: 'generateRelations', component: NotFoundComponent },
    ]
  },
  { path: 'about', component: NotFoundComponent },
  { path: '**', redirectTo: "initialization" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
