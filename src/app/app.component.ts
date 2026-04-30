import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiViewerComponent } from '../components/ui-viewer/ui-viewer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, UiViewerComponent, NavbarComponent], // Import RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tsiddheshwar.github.io';
  version = '0.0.16';
  currentYear: number = new Date().getFullYear(); 

  constructor(private themeService: ThemeService) {}
}
