import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiViewerComponent } from '../components/ui-viewer/ui-viewer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, UiViewerComponent, NavbarComponent], // Import RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tsiddheshwar.github.io';
  version: string = '';

  ngOnInit() {
    const packageJson = require('../../package.json');
    this.version = packageJson.version;
    console.log("%cUI version %s", "color: tomato", `v${this.version}`);
  }
}
