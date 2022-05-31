import { Component, OnInit } from '@angular/core';
import { ResumeResolverService } from '../resume-resolver.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor(resumeResolverService:ResumeResolverService) { 
    let data = JSON.parse(resumeResolverService.getResume());
    
  }

  ngOnInit(): void {
  }

}
