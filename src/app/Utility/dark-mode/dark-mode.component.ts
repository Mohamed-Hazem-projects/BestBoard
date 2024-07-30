import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dark-mode',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dark-mode.component.html',
  styleUrl: './dark-mode.component.scss'
})
export class DarkModeComponent {
  isDark: Boolean;
  constructor() {
    this.isDark = false;
  }
  changeMode() {
    if (this.isDark) {
      document.documentElement.style.setProperty("--white", "#1a1a1e")
      document.documentElement.style.setProperty("--black", "#e7e5e5")
      document.documentElement.style.setProperty("--greylight", "#41414185")
      document.documentElement.style.setProperty("--greylight2", "#2e2e30")
      document.documentElement.style.setProperty("--grey", "#41414185")
      document.documentElement.style.setProperty("--grey2", "#414141")
      document.documentElement.style.setProperty("--lightblue", "#1a1a1e")
      document.documentElement.style.setProperty("--whitetemp", "#1a1a1e")
      document.documentElement.style.setProperty("--lightbluetemp", "#121315")
      document.documentElement.style.setProperty("--greytemp", "#121315")
    } else {
      document.documentElement.style.setProperty("--white", "white")
      document.documentElement.style.setProperty("--black", "black")
      document.documentElement.style.setProperty("--greylight", "#f6f6f6")
      document.documentElement.style.setProperty("--greylight2", "#eee")
      document.documentElement.style.setProperty("--grey", "#ddd")
      document.documentElement.style.setProperty("--grey2", "#ccc")
      document.documentElement.style.setProperty("--lightblue", "#f1f5f9")
      document.documentElement.style.setProperty("--whitetemp", "white")
      document.documentElement.style.setProperty("--lightbluetemp", "#f1f5f9")
      document.documentElement.style.setProperty("--greytemp", "#ddd")
    }

  }
}
