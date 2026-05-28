import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CollectionsComponent } from './pages/collections/collections';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'HOROLOGE — The Art of Time',
  },
  {
    path: 'collections',
    component: CollectionsComponent,
    title: 'HOROLOGE — Collections',
  },

  {
    path: '**',
    redirectTo: '',
  },
];
