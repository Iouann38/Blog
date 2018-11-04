import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() unPost: Post;
  @Input() index: number;
                
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.unPost.loveIts++;
  }

  onDontLoveIt() {
    this.unPost.loveIts--;
  }

  onDeletePost() {
    this.postService.onDeletePost(this.index);
  }

}
