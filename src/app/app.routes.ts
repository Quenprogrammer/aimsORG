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
import {Users} from './samuel/admin/users';
import {Inbox} from './samuel/admin/inbox';
import { EventsComponent } from './samuel/events/events';
import {Unit} from './samuel/admin/unit';
import { Post } from '../app/samuel/admin/post/post';
import {UploadPost} from './samuel/admin/post/upload-post';
import {Settings} from './samuel/admin/settings/settings';
import {DashboardComponent} from './samuel/admin/dashboard/dashboard.component';
import {ProductsComponent} from './samuel/admin/products/products.component';
import {SalesComponent} from './samuel/admin/sales/sales.component';
import {PurchaseComponent} from './samuel/admin/purchase/purchase.component';
import {PayoutComponent} from './samuel/admin/payout/payout.component';
import {FavouriteComponent} from './samuel/admin/favourite/favourite.component';
import {MusicUpload} from './samuel/admin/music-upload';
import {VideoUpload} from './samuel/admin/video-upload';
import {PictureUploa} from './samuel/admin/picture-uploa';
import {EventsUpload} from './samuel/admin/events';

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



  {path: 'adminDashboard', loadComponent: () => import('../app/samuel/admin/dashboard/dashboard.component').then(c => DashboardComponent)},
  {path: 'adminProducts', loadComponent: () => import('../app/samuel/admin/products/products.component').then(c => ProductsComponent)},
  {path: 'adminSales', loadComponent: () => import('../app/samuel/admin/sales/sales.component').then(c => SalesComponent)},
  {path: 'adminPurchase', loadComponent: () => import('../app/samuel/admin/purchase/purchase.component').then(c => PurchaseComponent)},
  {path: 'adminSettings', loadComponent: () => import('../app/samuel/admin/settings/settings.component').then(c => Settings)},
  {path: 'adminPayout', loadComponent: () => import('../app/samuel/admin/payout/payout.component').then(c => PayoutComponent)},
  {path: 'adminFavourite', loadComponent: () => import('../app/samuel/admin/favourite/favourite.component').then(c => FavouriteComponent)},
  {path: 'adminMusic', loadComponent: () => import('../app/samuel/admin/music-upload').then(c => MusicUpload)},
  {path: 'adminVideos', loadComponent: () => import('../app/samuel/admin/video-upload').then(c => VideoUpload)},
  {path: 'adminPicture', loadComponent: () => import('../app/samuel/admin/picture-uploa').then(c => PictureUploa)},

    {path: 'adminUsers', loadComponent: () => import('../app/samuel/admin/users').then(c => Users)},
  {path: 'adminInbox', loadComponent: () => import('../app/samuel/admin/inbox').then(c => Inbox)},
  {path: 'adminEvents', loadComponent: () => import('../app/samuel/admin/events').then(c =>EventsUpload )},
  {path: 'adminUnit', loadComponent: () => import('../app/samuel/admin/users').then(c => Unit)},
  {path: 'adminPost', loadComponent: () => import('../app/samuel/admin/post/post').then(c => Post)},
  {path: 'adminPostUpload', loadComponent: () => import('../app/samuel/admin/post/post').then(c => UploadPost)},
  {path: 'reportProblem', loadComponent: () => import('../app/samuel/admin/settings/settings').then(c => Settings)},

  // Fallback
  { path: '**', redirectTo: 'homepage' }
];
