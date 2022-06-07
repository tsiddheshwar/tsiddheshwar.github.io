import { Component, OnInit } from '@angular/core';
import { ResumeResolverService } from '../resume-resolver.service';


@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss']
})
export class TechnicalSkillsComponent implements OnInit {
  technical_skills:any;
  constructor(resumeResolverService:ResumeResolverService) {
    this.technical_skills = JSON.parse(resumeResolverService.getResume()).technical_skills;
   }

  ngOnInit(): void {
  }

}
