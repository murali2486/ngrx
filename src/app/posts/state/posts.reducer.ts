import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, updatePost } from "./posts.actions";
import { initialState } from "./posts.state";

export const _postsReducer = createReducer(initialState, 
on(addPost, (state, action) => {
    const post = {...action.post};
    post.id = (state.posts.length+1).toString();

    return {
        ...state,
        posts: [...state.posts, post]
    }
}),
on(updatePost, (state, action) => {
    let updatedPosts = state.posts.map(post => {
        return action.post.id === post.id ? action.post : post
    });
    return {        
        ...state,
        posts: updatedPosts
    };
}),
on(deletePost, (state, action) => {
    let posts = state.posts.filter(post => post.id !== action.id);
    return {
        ...state,
        posts:posts
    }
})
);


export function PostsReducer(state: any, action: any){
    return _postsReducer(state, action);
}