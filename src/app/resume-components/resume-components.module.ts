import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { ConsolidatedResumeComponent } from './consolidated-resume/consolidated-resume.component';
import { AcademicSynopsisComponent } from './academic-synopsis/academic-synopsis.component';



@NgModule({
  declarations: [
    IntroComponent,
    ConsolidatedResumeComponent,
    AcademicSynopsisComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ConsolidatedResumeComponent
  ]
})
export class ResumeComponentsModule { }
