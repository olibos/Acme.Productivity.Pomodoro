export const actionIds = {
    USER_AUTHENTICATION_RECOVER: '[AUTH-000] The user want to authenticate with existing bearer.',
    USER_AUTHENTICATION_START: '[AUTH-001] The user want to authenticate.',
    USER_AUTHENTICATION_SUCCESS: '[AUTH-002] The user is authenticated.',
    USER_AUTHENTICATION_FAILED: '[AUTH-003] The authentication failed.',
    USER_AUTHENTICATION_DISCONNECTED: '[AUTH-004] The user has been disconnected.',
};

export interface BaseAction {
    type: string;
    payload?: any;
}

export const userAuthenticationRecover = (): BaseAction => ({
    type: actionIds.USER_AUTHENTICATION_RECOVER,
    payload: null,
});

export const userAuthenticationStart = (
    username: string,
    password: string
): BaseAction => ({
    type: actionIds.USER_AUTHENTICATION_START,
    payload: {
        username,
        password
    },
});

export const userAuthenticationSuccess = (
    bearer: string | null,
): BaseAction => ({
    type: actionIds.USER_AUTHENTICATION_SUCCESS,
    payload: {
        bearer
    },
});

export const userAuthenticationFailed = (): BaseAction => ({
    type: actionIds.USER_AUTHENTICATION_FAILED,
    payload: null,
});

export const userAuthenticationDisconnected = (): BaseAction => ({
    type: actionIds.USER_AUTHENTICATION_DISCONNECTED,
    payload: null,
});