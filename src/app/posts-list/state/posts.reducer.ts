import { createReducer, on } from "@ngrx/store";
import { addPost } from "./posts.actions";
import { initialState } from "./posts.state";

export const _postsReducer = createReducer(initialState, on(addPost, (state, action) => {
    const post = {...action.post};
    post.id = (state.posts.length+1).toString();

    return {
        ...state,
        posts: [...state.posts, post]
    }
}));


export function PostsReducer(state: any, action: any){
    return _postsReducer(state, action);
}