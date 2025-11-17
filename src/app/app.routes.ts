import { Routes } from '@angular/router';

// ==================== Vendor Components ====================
import { DashboardComponent as VendorDashboardComponent } from './Vendor/dashboard/dashboard.component';
import { SettingsComponent as VendorSettingsComponent } from './Vendor/settings/settings.component';
import { ProductsComponent as VendorProductsComponent } from './Vendor/products/products.component';
import { InboxComponent } from './Vendor/inbox/inbox.component';
import { StatisticsComponent } from './Vendor/statistics/statistics.component';
import { PaymentComponent } from './Vendor/payment/payment.component';
import { MessageComponent } from './Vendor/message/message.component';
import { TermsComponent } from './Vendor/terms/terms.component';
import { PolicyComponent } from './Vendor/policy/policy.component';
import { DeliveryComponent } from './Vendor/delivery/delivery.component';


// ==================== Users Components ====================
import { ProfileComponent } from './Users/profile/profile.component';
import { DashboardComponent as UsersDashboardComponent } from './Users/dashboard/dashboard.component';
import { HistoryComponent } from './Users/history/history.component';
import { SettingsComponent as UsersSettingsComponent } from './Users/settings/settings.component';
import { ReportIssuesComponent } from './Users/report-issues/report-issues.component';

// ==================== App Components ====================
import { HomepageComponent } from './App/homepage/homepage.component';
import { VendorsComponent } from './App/vendors/vendors.component';
import { ProductsComponent as AppProductsComponent } from './App/products/products.component';
import { TagComponent } from './App/tag/tag.component';

// ==================== Categories Components ====================
import { FashionComponent } from './Categories/fashion/fashion.component';
import { GroceryComponent } from './Categories/grocery/grocery.component';
import { FurnitureComponent } from './Categories/furniture/furniture.component';
import { MarketComponent } from './Categories/market/market.component';

// ==================== Accounts Components ====================
import { CreateAccountComponent } from './Accounts/create-account/create-account.component';
import { RegisterVendorsComponent } from './Accounts/register-vendors/register-vendors.component';
import { KycComponent } from './Accounts/kyc/kyc.component';
import {ThankYouComponent} from './Vendor/thank-you/thank-you.component';
import {Bog} from './App/bog/bog';

export const routes: Routes = [
  // Homepage
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'blog', component: Bog},

  // Vendor routes
  { path: 'vendor/dashboard', component: VendorDashboardComponent },
  { path: 'vendor/settings', component: VendorSettingsComponent },
  { path: 'vendor/products', component: VendorProductsComponent },
  { path: 'vendor/inbox', component: InboxComponent },
  { path: 'vendor/statistics', component: StatisticsComponent },
  { path: 'vendor/payment', component: PaymentComponent },
  { path: 'vendor/message', component: MessageComponent },
  { path: 'vendor/terms', component: TermsComponent },
  { path: 'vendor/policy', component: PolicyComponent },
  { path: 'vendor/delivery', component: DeliveryComponent },
  { path: 'vendor/thank you', component: ThankYouComponent },

  // Users routes
  { path: 'users/profile', component: ProfileComponent },
  { path: 'users/dashboard', component: UsersDashboardComponent },
  { path: 'users/history', component: HistoryComponent },
  { path: 'users/settings', component: UsersSettingsComponent },
  { path: 'users/report-issues', component: ReportIssuesComponent },

  // App routes
  { path: 'vendors', component: VendorsComponent },
  { path: 'products', component: AppProductsComponent },
  { path: 'tag', component: TagComponent },

  // Categories
  { path: 'categories/fashion', component: FashionComponent },
  { path: 'categories/grocery', component: GroceryComponent },
  { path: 'categories/furniture', component: FurnitureComponent },
  { path: 'categories/market', component: MarketComponent },

  // Accounts
  { path: 'accounts/create-account', component: CreateAccountComponent },
  { path: 'accounts/register-vendors', component: RegisterVendorsComponent },
  { path: 'accounts/kyc', component: KycComponent },

  // Fallback
  { path: '**', redirectTo: 'homepage' }
];
