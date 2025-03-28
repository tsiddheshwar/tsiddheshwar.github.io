import { Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';

export const routes: Routes = [
    { path: '**', component: NotFoundComponent } // Wildcard route for 404
];
