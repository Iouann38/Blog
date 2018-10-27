import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() unPost: Post;
                
  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.unPost.loveIts++;
  }

  onDontLoveIt() {
    this.unPost.loveIts--;
  }
}
