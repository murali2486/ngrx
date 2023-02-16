import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPosts } from 'src/app/counter/state/posts.selectors';
import { AppState } from 'src/app/state/app.state';
import { Posts } from '../models/posts.model';

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
}