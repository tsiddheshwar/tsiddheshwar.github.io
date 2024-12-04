import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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
