import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";

import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./post-list/posts-list.component";
import { PostsReducer } from "./state/posts.reducer";

const routes: Routes = [
    {
        path: '',
        component: PostsListComponent,
        children: [
          {
            path:'add',
            component: AddPostComponent
          },
          {
            path:'edit/:id',
            component: EditPostComponent
          }
        ]
      }
];

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        StoreModule.forFeature('posts', PostsReducer)
    ],
    declarations:[
        PostsListComponent,
        AddPostComponent,
        EditPostComponent,
    ],
    providers:[]
})
export class PostsModule{

}