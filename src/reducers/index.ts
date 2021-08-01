import * as fromUserReducer from "./user-reducer";
import { ActionReducerMap, createSelector } from '@ngrx/store'


export interface RootReducerState {
    users: fromUserReducer.UserReducerState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    users: fromUserReducer.UserReducer
}

export const getUsersState = (state: RootReducerState) => state.users;

export const getUserLoading = createSelector(getUsersState, fromUserReducer.getLoading);
export const getUserLoaded = createSelector(getUsersState, fromUserReducer.getLoaded);
export const getUsers = createSelector(getUsersState, fromUserReducer.getUsers);