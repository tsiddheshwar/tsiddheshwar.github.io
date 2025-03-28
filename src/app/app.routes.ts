import { Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { PortfolioViewerComponent } from '../components/portfolio-viewer/portfolio-viewer.component'; // Import PortfolioViewerComponent

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root to /home
    { path: 'home', component: PortfolioViewerComponent },
    { path: 'landing', component: PortfolioViewerComponent },
    { path: 'contact', component: PortfolioViewerComponent }, 
    { path: '**', component: NotFoundComponent } // Wildcard route for 404
];
