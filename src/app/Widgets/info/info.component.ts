import { Component } from '@angular/core';

@Component({
  selector: 'general-info-widget',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class GeneralInfoComponent {
  allowChange: Boolean = false;
  buttonText: string = "Change"
  disablechange() {
    this.allowChange = !this.allowChange
    if (this.allowChange) {
      this.buttonText = "Confirm"
    }
    else {
      this.buttonText = "Change"
    }
  }
}
