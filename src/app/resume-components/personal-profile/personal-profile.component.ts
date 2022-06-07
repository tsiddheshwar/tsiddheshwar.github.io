import { Component, OnInit } from '@angular/core';
import { ResumeResolverService } from '../resume-resolver.service';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss']
})
export class PersonalProfileComponent implements OnInit {
  personal_profile:any;
  hobbies_interests:Array<string>;
  languages:any;
  personal_skills:Array<string>;
  constructor(resumeResolverService:ResumeResolverService) {
    let data = JSON.parse(resumeResolverService.getResume());
    this.personal_profile = data.personal_profile;
    this.hobbies_interests = this.personal_profile['hobbies/interests'];
    this.languages = this.personal_profile.languages;
    this.personal_skills = this.personal_profile.personal_skills;
   }

  ngOnInit(): void {
    
  }

}
