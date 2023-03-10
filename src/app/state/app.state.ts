import { AuthReducer } from "../auth/state/auth.reducers";
import { AuthState } from "../auth/state/auth.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { counterState } from "../counter/state/counter.state";
import { PostsReducer } from "../posts/state/posts.reducer";
import { PostState } from "../posts/state/posts.state";



export interface AppState{
    counter: counterState,
    posts: PostState,
    auth: AuthState
}

export const AppReducer={
    counter: counterReducer,
    posts: PostsReducer,
    auth: AuthReducer
}