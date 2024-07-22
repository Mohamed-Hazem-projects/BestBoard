import { Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: "Home", pathMatch: "full" },
  { path: 'Home', component: DashboardComponent },

  { path: '**', component: DashboardComponent }//implement not found later
];
