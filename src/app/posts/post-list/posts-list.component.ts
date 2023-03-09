import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/models/posts.model';

import { AppState } from 'src/app/state/app.state';
import { deletePost } from '../state/posts.actions';
import { getPosts } from '../state/posts.selectors';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts$!: Observable<Posts[]>;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

  loadAddPost(){
    this.router.navigate(['/posts/add']);
  }

  deletePost(id: any){
    this.store.dispatch(deletePost({id}));
    this.router.navigate(['posts']);
  }
}
