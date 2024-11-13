import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiViewerHelperServiceService } from '../services/ui-viewer-helper-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router,
    public uiViewerHelperServiceService: UiViewerHelperServiceService
  ) { }

  ngOnInit(): void {
  }

  clickNav(navbarItem: string) {
    this.router.navigate(['/', navbarItem]);
  }

}
