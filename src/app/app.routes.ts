import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CollectionsComponent } from './pages/collections/collections';
import { HeritageComponent } from './pages/heritage/heritage';
import { ConciergeComponent } from './pages/concierge/concierge';
import { ProductDetailComponent } from './pages/product-detail/product-detail';
import { CartComponent } from './pages/cart/cart';
import { LoginComponent } from './pages/login/login';
import { SignupComponent } from './pages/signup/signup';

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
    path: 'heritage',
    component: HeritageComponent,
    title: 'HOROLOGE — Heritage',
  },
  {
    path: 'concierge',
    component: ConciergeComponent,
    title: 'HOROLOGE — Concierge',
  },
  {
    path: 'product/lune-perpetuelle',
    component: ProductDetailComponent,
    title: 'Lune Perpétuelle | HOROLOGE',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Your Selection | HOROLOGE',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Secure Authentication | HOROLOGE',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Join the Maison | HOROLOGE',
  },

  {
    path: '**',
    redirectTo: '',
  },
];
