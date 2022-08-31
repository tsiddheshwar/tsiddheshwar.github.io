import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-construction-popup',
  templateUrl: './under-construction-popup.component.html',
  styleUrls: ['./under-construction-popup.component.scss']
})
export class UnderConstructionPopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let a = document.getElementById('underconstructionBtn');
    a ? a.click() : '';
  }

}
