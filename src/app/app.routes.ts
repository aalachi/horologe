import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CollectionsComponent } from './pages/collections/collections';
import { HeritageComponent } from './pages/heritage/heritage';
import { ConciergeComponent } from './pages/concierge/concierge';
import { ProductDetailComponent } from './pages/product-detail/product-detail';
import { CartComponent } from './pages/cart/cart';
import { LoginComponent } from './pages/login/login';
import { SignupComponent } from './pages/signup/signup';
import { ProfileComponent } from './pages/profile/profile';
import { ProfileDashboardComponent } from './pages/profile/dashboard/profile-dashboard';
import { ProfileCollectionComponent } from './pages/profile/collection/profile-collection';
import { ProfileServiceHistoryComponent } from './pages/profile/service-history/profile-service-history';
import { ProfilePreferencesComponent } from './pages/profile/preferences/profile-preferences';
import { SearchComponent } from './pages/search/search';
import { JournalComponent } from './pages/journal/journal';
import { JournalArticleComponent } from './pages/journal-article/journal-article';
import { CheckoutComponent } from './pages/checkout/checkout';
import { CheckoutBankTransferComponent } from './pages/checkout-bank-transfer/checkout-bank-transfer';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service';
import { ShippingReturnsComponent } from './pages/shipping-returns/shipping-returns';
import { ContactComponent } from './pages/contact/contact';

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
    path: 'journal',
    component: JournalComponent,
    title: 'Journal | HOROLOGE',
  },
  {
    path: 'journal/:slug',
    component: JournalArticleComponent,
    title: 'Article | HOROLOGE',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Your Selection | HOROLOGE',
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Secure Checkout | HOROLOGE',
  },
  {
    path: 'checkout/verify',
    component: CheckoutBankTransferComponent,
    title: 'Verify Transfer | HOROLOGE',
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
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: ProfileDashboardComponent,
        title: 'Maison Account | HOROLOGE',
      },
      {
        path: 'collection',
        component: ProfileCollectionComponent,
        title: 'My Collection | HOROLOGE',
      },
      {
        path: 'service-history',
        component: ProfileServiceHistoryComponent,
        title: 'Service History | HOROLOGE',
      },
      {
        path: 'preferences',
        component: ProfilePreferencesComponent,
        title: 'Preferences | HOROLOGE',
      },
    ]
  },
  {
    path: 'search',
    component: SearchComponent,
    title: 'Search Results | HOROLOGE',
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'Privacy Policy | HOROLOGE',
  },
  {
    path: 'terms-of-service',
    component: TermsOfServiceComponent,
    title: 'Terms of Service | HOROLOGE',
  },
  {
    path: 'shipping-returns',
    component: ShippingReturnsComponent,
    title: 'Logistics as a Fine Art | HOROLOGE',
  },
  {
    path: 'contact',
    redirectTo: 'concierge',
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: '',
  },
];
