import { counterReducer } from "../counter/state/counter.reducer";
import { counterState } from "../counter/state/counter.state";
import { PostsReducer } from "../counter/state/posts.reducer";
import { PostState } from "../counter/state/posts.state";

export interface AppState{
    counter: counterState,
    posts: PostState
}

export const AppReducer={
    counter: counterReducer,
    posts: PostsReducer
}