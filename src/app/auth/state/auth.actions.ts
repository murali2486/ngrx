import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const LOGIN_START = "[auth page] login start";
export const LOGIN_SUCCESS = "[auth page] login success";
export const LOGIN_ERROR = "[auth page] login error";

export const loginStart = createAction(LOGIN_START, props<{ email:any; password:any }>());
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{user: User}>());