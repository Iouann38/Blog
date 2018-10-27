import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Posts';

  T_Posts = [ new Post("Mon premier post","Mon premier post"),
              new Post("Mon deuxième post","Mon deuxième post"),
              new Post("Encore un post","Encore un post")
             ];
}
