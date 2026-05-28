import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'HOROLOGE — The Art of Time',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
