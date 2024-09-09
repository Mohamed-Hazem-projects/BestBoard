import { Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: "Home", pathMatch: "full" },
  { path: 'Home', component: DashboardComponent },
  {
    path: 'Friends',
    loadComponent: () => import('./Pages/Friends/users-list/users-list.component')
      .then(r => r.UsersListComponent)
  },
  {
    path: 'Friends/Friend/:id',
    loadComponent: () => import('./Pages/Friends/user-details/user-details.component')
      .then(r => r.UserDetailsComponent)
  },
  {
    path: 'Settings',
    loadComponent: () => import('./Pages/Settings/settings.component')
      .then(r => r.SettingsComponent)
  },
  { path: '**', component: DashboardComponent }//implement not found later
];
