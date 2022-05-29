import { Component } from '@angular/core';
import { ResumeLoaderService } from './resume-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tsiddheshwar.github.io';
  constructor(resumeLoaderService:ResumeLoaderService){
    console.log(resumeLoaderService.resume);
    
  }
}
