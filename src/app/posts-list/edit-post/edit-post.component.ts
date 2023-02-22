import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Posts } from 'src/app/models/posts.model';
import { getPostById } from '../state/posts.selectors';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  editPostForm!: FormGroup;
  postId: any;
  post!: any;
  constructor(private activatedRoute: ActivatedRoute, private store: Store) { 
    activatedRoute.paramMap.subscribe(params => {
      this.postId = params.get('id');      
      this.store.pipe(select(getPostById({id: this.postId}))).subscribe((post: any) => {
        this.post=post;  
        this.editPostForm=new FormGroup({
          title:new FormControl(this.post.title, [Validators.required, Validators.minLength(3)]),
          description: new FormControl(this.post.description, [Validators.required, Validators.minLength(6)])
        });
        console.log(this.editPostForm);
      });      
    });
  
  }

  ngOnInit(): void {
  }
  updatePost(){

  }

}
