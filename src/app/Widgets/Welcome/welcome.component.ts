import { DatePipe } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfiniteSlidingDirective } from '../../Directives/infinite-sliding.directive';

@Component({
  selector: 'welcome-widget',
  standalone: true,
  imports: [RouterLink, DatePipe, InfiniteSlidingDirective],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  Date: number = Date.now()
  User: {
    FirstName: string,
    LastName: string,
    Position: string,
    NoOfProjects: number,
    MoneyEarned: number
  }
  constructor() {
    this.User = {
      FirstName: "Mohamed",
      LastName: "Hazem",
      Position: "Full-Stack Developer",
      NoOfProjects: 27,
      MoneyEarned: 4320
    }
  }

}
