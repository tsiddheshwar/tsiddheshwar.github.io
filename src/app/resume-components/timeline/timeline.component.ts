import { Component, OnInit } from '@angular/core';
import { ResumeResolverService } from '../resume-resolver.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timelineMap:Map<number,any>=new Map;
  constructor(resumeResolverService:ResumeResolverService) { 
    let data = JSON.parse(resumeResolverService.getResume());
    this.initiateMap(data);
  }

  ngOnInit(): void {
  }
  initiateMap(obj:any){
    this.timelineMap.set(2012,{"name":"test"});
    console.log(this.timelineMap);
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
          // console.log(key + " -> " + obj[key]);
          if(obj[key].length && typeof(obj[key])!='string'){
            console.log(key,typeof(obj[key]));
            
          }
          // this.timelineMap.set(key,boj['key']);
      }
  }
    
  }
}
