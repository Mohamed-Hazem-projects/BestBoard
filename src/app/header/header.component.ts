import { Component } from '@angular/core';
import { SearchComponent } from '../Utility/search/search.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClickedOutsideDirective } from '../Directives/clicked-outside.directive';

@Component({
  selector: 'my-header',
  standalone: true,
  imports: [SearchComponent, RouterLink, CommonModule, ClickedOutsideDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  barFlag: Boolean;
  delayBarFlag: Boolean;
  notificationData: { img: string; notification: string; date: string }[]
  constructor() {
    this.barFlag = false;
    this.delayBarFlag = false;
    this.notificationData = [
      { img: "assets/avatar2.png", notification: "It's Fatma's birthday!", date: "2 Hours Ago" },
      { img: "assets/avatar3.png", notification: "Lobna commented in your post", date: "4 Hours Ago" },
      { img: "assets/avatar4.png", notification: "Hazem liked your post.", date: "7 Hours Ago" },
      { img: "assets/avatar5.png", notification: "Eslam sent you a friend request.", date: "12 Hours Ago" },
      { img: "assets/avatar6.png", notification: "Mustafa reacted to your post.", date: "15 Hours Ago" },
      { img: "assets/avatar3.png", notification: "Lobna mentioned you in a comment", date: "18 Hours Ago" },
      { img: "assets/avatar5.png", notification: "Ashraf invited you to a group.", date: "1 Day Ago" },
      { img: "assets/avatar1.png", notification: "Your post got 23 comment.", date: "1 Day Ago" },
      { img: "assets/avatar1.png", notification: "Your post got 192 likes.", date: "1 Day Ago" },
      { img: "assets/avatar1.png", notification: "Your post was uploaded.", date: "1 Day Ago" }
    ]
  }
  toggleBar() {
    this.barFlag = !this.barFlag;
    this.delayBarFlag = false;
  }
  hideBar() {
    this.delayBarFlag ? this.delayBarFlag = this.barFlag = false : this.delayBarFlag = true;
  }
}
