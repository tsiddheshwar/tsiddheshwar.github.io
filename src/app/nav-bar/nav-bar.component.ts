import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navbarItems: any = ['Skills', 'Work done', 'Tools', 'Landing Pages', 'Contact'];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickNav(navbarItem: any) {
    navbarItem == "Skills" ? this.router.navigate(['/', 'skills']) :
      navbarItem == "Work done" ? this.router.navigate(['/', 'workdone']) :
        navbarItem == "Tools" ? this.router.navigate(['/', 'tools']) :
          navbarItem == "Landing Pages" ? this.router.navigate(['/', 'landingpages']) :
            navbarItem == "Contact" ? this.router.navigate(['/', 'contact']) : '';
  }

}
