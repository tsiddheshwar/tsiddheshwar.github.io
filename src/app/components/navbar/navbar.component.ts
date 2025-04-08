import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // Import RouterModule here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] // Fixed typo: styleUrl -> styleUrls
})
export class NavbarComponent {
  appTitle = 'My Application'; // Replace with your app title
  userDetails = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };
  showUserDetails = false;

  toggleUserDetails() {
    this.showUserDetails = !this.showUserDetails;
  }
}
