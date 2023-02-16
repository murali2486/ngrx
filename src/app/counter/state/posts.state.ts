import { Posts } from "src/app/models/posts.model";



export interface PostState {
    posts: Posts[];
}


export const initialState: PostState = {
    posts: [
        {
            id:'1', title:'ngrx', description:'Ngrx learning'
        },
        {
            id:'2', title:'angular', description:'Angular post'
        }
    ]
}