import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Iword {
  word: string,
  count: number
}
@Component({
  selector: 'top-search-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-search.component.html',
  styleUrl: './top-search.component.scss'
})
export class TopSearchComponent {
  words: Iword[];
  constructor() {
    this.words = [
      { word: "Programming", count: 1580 },
      { word: "Angular", count: 1152 },
      { word: "javaScript", count: 873 },
      { word: "TypeScript", count: 498 },
      { word: "C#", count: 355 },
      { word: "CSS", count: 120 },
      { word: "HTML", count: 52 }
    ]
  }
}
