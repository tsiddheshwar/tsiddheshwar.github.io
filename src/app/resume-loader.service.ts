import { Injectable } from '@angular/core';
import resume from '../assets/resume.json'

@Injectable({
  providedIn: 'root'
})
export class ResumeLoaderService {
  resume:JSON;
  constructor() {
    this.resume = resume;
   }
}
