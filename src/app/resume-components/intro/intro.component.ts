import { Component, OnInit } from '@angular/core';
import { ResumeResolverService } from '../resume-resolver.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  name:string;
  linkedin:string;
  github:string;
  
  constructor(resumeResolverService:ResumeResolverService) {
    let data = JSON.parse(resumeResolverService.getResume());
    this.name = data.name;
    this.linkedin =data.linkedin;
    this.github =data.Github;
   }

  ngOnInit(): void {
    console.log(this.name,'my name');
    
  }
  downloadresume(){
    console.log('downlaod clicked');
    
  }

}
