import { createReducer, on } from "@ngrx/store";
import { loginSuccess } from "./auth.actions";
import { AuthState, initialState } from "./auth.state";

export const _authReducer = createReducer(initialState, 
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    })
    ); 

export function AuthReducer(state: AuthState, action: any){
    return _authReducer(state, action);
}