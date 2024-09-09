import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'toggle-switch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.scss'
})
export class ToggleSwitchComponent {
  toggle: Boolean = true;
  @Output() toggleValue = new EventEmitter<Boolean>();
  emitValue() {
    this.toggleValue.emit(!this.toggle)
  }
}
