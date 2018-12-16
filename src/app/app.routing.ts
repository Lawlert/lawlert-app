import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SenatorsComponent } from './senators/senator-list/senators.component';
import { BillsComponent } from './bills/bills.component';

const routes: Routes = [
  { path: '', component: SenatorsComponent },
  { path: 'bills', component: BillsComponent }];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
