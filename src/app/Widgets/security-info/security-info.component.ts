import { Component } from '@angular/core';
import { ToggleSwitchComponent } from '../../Utility/toggle-switch/toggle-switch.component';

@Component({
  selector: 'security-info-widget',
  standalone: true,
  imports: [ToggleSwitchComponent],
  templateUrl: './security-info.component.html',
  styleUrl: './security-info.component.scss'
})
export class SecurityInfoComponent {

}
