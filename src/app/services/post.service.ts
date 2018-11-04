
import { Post } from '../post';
import { Subject } from 'rxjs/Subject';

export class PostService {

    postSubject = new Subject<Post[]>();

    private T_Posts : Post[] = [ new Post("Mon premier post","Mon premier post"),
                                 new Post("Mon deuxième post","Mon deuxième post"),
                                 new Post("Encore un post","Encore un post")
                               ];

    constructor() {
        
    }

    emitPostSubject() {
        this.postSubject.next(this.T_Posts.slice());
    }

    onDeletePost(index : number) {
        this.T_Posts.splice(index, 1);
        this.emitPostSubject();
    }

    addPost(post : Post) {
        this.T_Posts.push(post);
        this.emitPostSubject();
    }

}
