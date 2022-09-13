import { Component, OnInit } from '@angular/core';
import { ResumeResolverService } from '../resume-resolver.service';


@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss']
})
export class TechnicalSkillsComponent implements OnInit {
  technical_skills: any;
  technologies: any = [];
  technologies_types = ['programminglanguage', 'webtechnology', 'framework'];
  tools: any = [];
  tools_types = ["tool", "versioncontrolltool", "projectmanagementtool", "IDE"];
  knowledge: any = [];
  knowledge_types = ["knowledge"];
  database: any = [];
  database_types = ["database"];
  main_types: any = [this.technologies, this.tools, this.database, this.knowledge];
  constructor(resumeResolverService: ResumeResolverService) {
    this.technical_skills = JSON.parse(resumeResolverService.getResume()).technical_skills;
  }

  ngOnInit(): void {
    for (let i = 0; i < this.technical_skills.length; i++) {
      if (this.technologies_types.includes(this.technical_skills[i].type)) {
        this.technologies.push(this.technical_skills[i]);
      }
      else if (this.tools_types.includes(this.technical_skills[i].type)) {
        this.tools.push(this.technical_skills[i]);
      }
      else if (this.knowledge_types.includes(this.technical_skills[i].type)) {
        this.knowledge.push(this.technical_skills[i]);
      }
      else if (this.database_types.includes(this.technical_skills[i].type)) {
        this.database.push(this.technical_skills[i]);
      }
    }
  }

}
