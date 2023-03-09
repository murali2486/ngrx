import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Posts } from 'src/app/models/posts.model';
import { AppState } from 'src/app/state/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  addPostForm!: FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.addPostForm=new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  addPost(){
    if(!this.addPostForm.valid){
      return;
    };
    const post: Posts = {
      title: this.addPostForm.value.title,
      description: this.addPostForm.value.description
    }
    this.store.dispatch(addPost({post}));        
  }
}
