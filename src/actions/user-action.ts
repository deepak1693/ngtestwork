export const USER_LIST_REQUEST = 'users list request';
export const USER_LIST_SUCCESS = 'users list success';
export const USER_LIST_FAILURE = 'users list failure';
export const USER_LIST_DELETE = 'users list deletion';

export class UserListRequestAction {
    readonly type = USER_LIST_REQUEST;
}

export class UserListSuccessAction {
    readonly type = USER_LIST_SUCCESS;
    constructor(public payload?: { data: any[] }) {
    }
}

export class UserListDeleteAction {
    readonly type = USER_LIST_DELETE;
    constructor(public payload?: { id: number }) {
    }
}

export class UserListFailureAction {
    readonly type = USER_LIST_FAILURE;
}