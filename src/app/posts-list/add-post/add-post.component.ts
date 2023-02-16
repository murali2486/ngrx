import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  addPostForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.addPostForm=new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  addPost(){
    if(this.addPostForm.valid){
      console.log(this.addPostForm.value);
    }    
  }
}
