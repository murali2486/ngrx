import { createAction, props } from "@ngrx/store";
import { Posts } from "src/app/models/posts.model";

export const addPost = createAction('adding post', props<{post: Posts}>());

export const updatePost = createAction('update post', props<{post: Posts}>());

export const deletePost = createAction('delete post', props<{id: string}>());