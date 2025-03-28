import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ui-viewer',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './ui-viewer.component.html',
  styleUrls: ['./ui-viewer.component.scss']
})
export class UiViewerComponent {

}
