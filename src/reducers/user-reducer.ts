import { USER_LIST_DELETE, USER_LIST_REQUEST, USER_LIST_SUCCESS } from '../actions/user-action';
import { Action } from './../actions'

export interface UserReducerState {
    loading: boolean;
    loaded: boolean;
    users: any[];
}

const initialUsersState: UserReducerState = {
    loading: false,
    loaded: false,
    users: []
}

export function UserReducer(state = initialUsersState, action: Action): UserReducerState {
    switch (action.type) {
        case USER_LIST_REQUEST: {
            return { ...state, loading: true };
        }
        case USER_LIST_SUCCESS: {
            const updatedData = action.payload.data;
            return { ...state, loading: false, loaded: true, users: updatedData };
        }

        case USER_LIST_DELETE: {
            const users = state.users.filter(data => data.id !== action.payload.id);
            return { ...state, ...{ users } };
        }
        default: {
            return state;
        }
    }
}

//selectors
export const getLoading = (state: UserReducerState) => state.loading;
export const getLoaded = (state: UserReducerState) => state.loaded;
export const getUsers = (state: UserReducerState) => state.users;