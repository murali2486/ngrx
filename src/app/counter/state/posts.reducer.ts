import { createReducer } from "@ngrx/store";
import { initialState } from "./posts.state";

export const _postsReducer = createReducer(initialState);


export function PostsReducer(state: any, action: any){
    return _postsReducer(state, action);
}