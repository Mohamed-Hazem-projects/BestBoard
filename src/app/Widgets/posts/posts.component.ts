import { Component } from '@angular/core';
import { IPost } from './post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'posts-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts: IPost[];
  index: number;
  pages: number[];
  selectedPost: IPost;
  constructor() {
    this.posts = [{
      name: "John Marston", likes: 102.5, comments: 3.2, time: "6 hours ago",
      post: '"You see a man whose character changed. I see a man who got found out... for who he truly was."', img: "assets/avatar1.png"
    }, {
      name: "Dutch van der Linde", likes: 153.9, comments: 48.5, time: "12 hour ago",
      post: '"You kill, I kill. You rob, I rob. Only difference I can see is I choose whom I kill and rob while you destroy everything in your path."', img: "assets/avatar4.png"
    }, {
      name: "Sadie Adler", likes: 50.4, comments: 0.5, time: "16 hours ago",
      post: '"Nobody\'s taking nothing from me ever again."', img: "assets/avatar3.png"
    }, {
      name: "Micah Bell", likes: 0.3, comments: 0.1, time: "5 days ago",
      post: '"I\'m a survivor, Black Lung! A survivor. That\'s all there is, living and dying."', img: "assets/avatar4.png"
    }, {
      name: "Andrew Milton", likes: 30, comments: 6.3, time: "12 days ago",
      post: '"You fools weren\'t listening to me, were you? I showed mercy... You mistook it for weakness. Now I will show strength, and you may mistake it for brutality."', img: "assets/avatar5.png"
    }, {
      name: "Hosea Matthews", likes: 47, comments: 2, time: "2 months ago",
      post: '"Oh, these futile lives of petty sin we have lived! What choice did we have, really?"', img: "assets/avatar1.png"
    }];
    this.index = 0;
    this.pages = [...Array(this.posts.length).keys()]
    this.selectedPost = this.posts[this.index];
  }
  next() {
    this.index++
    this.selectedPost = this.posts[this.index]
  }
  before() {
    this.index--
    this.selectedPost = this.posts[this.index]
  }
  paginate(i: number) {
    this.index = i
    this.selectedPost = this.posts[this.index]
  }
}
