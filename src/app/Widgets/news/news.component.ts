import { Component } from '@angular/core';
import { INews } from './INews';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'news-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  News: INews[] = [];
  constructor() {
    this.News = [
      { img: "assets/news1.png", h3: "Added Dark Mode", p: "Enjoy a sleek new look with our dark mode feature.", daysAgo: 3 },
      { img: "assets/news2.png", h3: "Launched Blog", p: "Stay updated with our latest insights and tips.", daysAgo: 5 },
      { img: "assets/news3.webp", h3: "Security Upgrade", p: " Enhanced protection with our latest security update.", daysAgo: 7 },
      { img: "assets/news4.jfif", h3: "Updated Pricing Plans", p: "Check out our new, flexible pricing options.", daysAgo: 15 }
    ]
  }
}
