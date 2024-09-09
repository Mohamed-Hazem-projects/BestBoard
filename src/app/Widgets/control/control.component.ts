import { Component } from '@angular/core';
import { ToggleSwitchComponent } from '../../Utility/toggle-switch/toggle-switch.component';

@Component({
  selector: 'control-widget',
  standalone: true,
  imports: [ToggleSwitchComponent],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss'
})
export class ControlComponent {

}
