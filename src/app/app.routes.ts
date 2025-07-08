import { Routes } from '@angular/router';
import {ShellComponent} from './layout/shell/shell.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import {AccountsComponent} from './features/accounts/accounts.component';
import { AccountDetailsComponent } from './features/account-details/account-details.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'accounts/:id', component: AccountDetailsComponent },
    ]
  }
];
