import { Component, OnInit } from '@angular/core';
import { ResumeResolverService } from '../resume-resolver.service';

@Component({
  selector: 'app-academic-synopsis',
  templateUrl: './academic-synopsis.component.html',
  styleUrls: ['./academic-synopsis.component.scss']
})
export class AcademicSynopsisComponent implements OnInit {
  data:any;
  academic_Synopsis:Array<any>;
  constructor(resumeResolverService:ResumeResolverService) { 
    this.data = JSON.parse(resumeResolverService.getResume());
    this.academic_Synopsis = this.data.academic_Synopsis;
  }

  ngOnInit(): void {
    this.updateDates();
  }
  updateDates(){
    this.academic_Synopsis.forEach(element => {
      let date = new Date(element.year);
      element.year = date.getFullYear();
    });
    this.academic_Synopsis.sort((a,b)=>b.year-a.year);
    
  }
}
