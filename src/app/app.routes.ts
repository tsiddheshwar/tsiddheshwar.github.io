import { Routes } from '@angular/router';
import { ContactComponent } from '../components/contact/contact.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { PortfolioViewerComponent } from '../components/portfolio-viewer/portfolio-viewer.component';
import { ChatSampleComponent } from './components/chat-sample/chat-sample.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: PortfolioViewerComponent, title: 'Siddheshwar Tekale · Senior Software Engineer' },
    { path: 'landing', redirectTo: '/home', pathMatch: 'full' },
    { path: 'projects', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contact', component: ContactComponent, title: 'Contact · Siddheshwar Tekale' },
    { path: 'chat', component: ChatSampleComponent, title: 'Chat sample' },
    { path: '**', component: NotFoundComponent, title: 'Not found' },
];
