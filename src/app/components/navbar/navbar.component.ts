import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService, ThemeMode } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] // Fixed typo: styleUrl -> styleUrls
})
export class NavbarComponent {
  appTitle = 'Siddheshwar Tekale';

  constructor(public themeService: ThemeService) {}

  setTheme(mode: ThemeMode) {
    this.themeService.setMode(mode);
  }
}
