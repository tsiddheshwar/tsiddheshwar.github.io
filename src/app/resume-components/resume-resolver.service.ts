import { Injectable } from '@angular/core';
import resume from '../../assets/resume.json'
@Injectable({
  providedIn: 'root'
})
export class ResumeResolverService {
  private resume:string;
  constructor() {
    this.resume = JSON.stringify(resume);
    console.log(JSON.parse(this.resume));
    
   }
  getResume(){
    return this.resume;
  }
}
