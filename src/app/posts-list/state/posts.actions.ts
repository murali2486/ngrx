import { createAction, props } from "@ngrx/store";
import { Posts } from "src/app/models/posts.model";

export const addPost = createAction('adding post', props<{post: Posts}>());