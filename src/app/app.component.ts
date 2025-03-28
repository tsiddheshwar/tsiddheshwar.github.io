import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiViewerComponent } from '../components/ui-viewer/ui-viewer.component'; // Import UiViewerComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiViewerComponent], // Add UiViewerComponent to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Fixed typo: changed styleUrl to styleUrls
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
