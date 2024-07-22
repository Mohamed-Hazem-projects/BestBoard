import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  links: { name: string; icon: string; address: string }[];
  constructor() {
    this.links = [
      { name: "Dashboard", icon: "fa-solid fa-chart-column fa-fw", address: "Home" },
      { name: "Profile", icon: "fa-solid fa-id-card fa-fw", address: "Profile" },
      { name: "Plans", icon: "fa-solid fa-earth-americas fa-fw", address: "Plans" },
      { name: "Statistics", icon: "fa-solid fa-chart-pie fa-fw", address: "Statistics" },
      { name: "Projects", icon: "fa-solid fa-diagram-project fa-fw", address: "Projects" },
      { name: "Courses", icon: "fa-solid fa-graduation-cap fa-fw", address: "Courses" },
      { name: "Friends", icon: "fa-solid fa-user-group fa-fw", address: "Friends" },
      { name: "Files", icon: "fa-solid fa-file fa-fw", address: "Files" },
      { name: "Settings", icon: "fa-solid fa-gear fa-fw", address: "Settings" }
    ]
  }
  changetheme() {
    document.documentElement.style.setProperty("--white", "black")
    document.documentElement.style.setProperty("--black", "white")
  }
}
