import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { ConsolidatedResumeComponent } from './consolidated-resume/consolidated-resume.component';
import { AcademicSynopsisComponent } from './academic-synopsis/academic-synopsis.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { TimelineComponent } from './timeline/timeline.component';



@NgModule({
  declarations: [
    IntroComponent,
    ConsolidatedResumeComponent,
    AcademicSynopsisComponent,
    TechnicalSkillsComponent,
    PersonalProfileComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ConsolidatedResumeComponent
  ]
})
export class ResumeComponentsModule { }
