import { Routes } from '@angular/router';
import { UploadComponent } from './features/upload/upload.component';
import { PricingListComponent } from './features/pricing-list/pricing-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'upload', pathMatch: 'full' },
  { path: 'upload', component: UploadComponent },
  { path: 'pricing', component: PricingListComponent }
];