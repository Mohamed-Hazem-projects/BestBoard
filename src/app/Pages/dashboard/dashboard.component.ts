import { Component } from '@angular/core';
import { MyHeaderComponent } from '../../Utility/my-header/my-header.component';

@Component({
  selector: 'dashboard-home',
  standalone: true,
  imports: [MyHeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
