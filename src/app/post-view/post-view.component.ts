import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit, OnDestroy  {

  title = 'Posts';

  T_Posts : Post[]; 
  postSubscription: Subscription;

  constructor(private postService: PostService) {
    
  }

  ngOnInit() {
    // this.T_Posts = this.postService.T_Posts;

    this.postSubscription = this.postService.postSubject.subscribe(
      (T_Posts: Post[]) => {
        this.T_Posts = T_Posts;
      }
    );
    this.postService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
