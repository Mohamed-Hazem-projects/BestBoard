import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'widgets-control-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widgets-control.component.html',
  styleUrl: './widgets-control.component.scss'
})
export class WidgetsControlComponent {

  controlsone: { id: string, name: string }[];
  controlstwo: { id: string, name: string }[];
  constructor() {
    this.controlsone = [
      { id: "one", name: "Latest Tasks" },
      { id: "two", name: "Yearly Targets" },
      { id: "three", name: "Tickets Statistics" },
      { id: "four", name: "Project Progress" },
      { id: "five", name: "Reminders" },
      { id: "six", name: "Latest Posts" },
    ]
    this.controlstwo = [
      { id: "one2", name: "Social Media" },
      { id: "two2", name: "Projects" },
      { id: "three2", name: "Latest News" },
      { id: "four2", name: "Quick Draft" },
      { id: "five2", name: "Top Searched" },
      { id: "six2", name: "Latest Uploads" },
    ]
  }
}
