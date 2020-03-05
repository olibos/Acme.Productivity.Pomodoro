import { BaseAction } from '../actions';

export const userActions = {
    USER_AUTHENTICATION_RECOVER: 'USER_AUTHENTICATION_RECOVER',
    USER_AUTHENTICATION_START: 'USER_AUTHENTICATION_START',
    USER_AUTHENTICATION_SUCCESS: 'USER_AUTHENTICATION_SUCCESS',
    USER_AUTHENTICATION_FAILED: 'USER_AUTHENTICATION_FAILED',
    USER_AUTHENTICATION_DISCONNECTED: 'USER_AUTHENTICATION_DISCONNECTED'
};

export const userAuthenticationRecover = (): BaseAction => ({
    type: userActions.USER_AUTHENTICATION_RECOVER,
    payload: null,
});

export const userAuthenticationStart = (
    username: string,
    password: string
): BaseAction => ({
    type: userActions.USER_AUTHENTICATION_START,
    payload: {
        username,
        password
    },
});

export const userAuthenticationSuccess = (
    bearer: string | null,
): BaseAction => ({
    type: userActions.USER_AUTHENTICATION_SUCCESS,
    payload: {
        bearer
    },
});

export const userAuthenticationFailed = (): BaseAction => ({
    type: userActions.USER_AUTHENTICATION_FAILED,
    payload: null,
});

export const userAuthenticationDisconnected = (): BaseAction => ({
    type: userActions.USER_AUTHENTICATION_DISCONNECTED,
    payload: null,
});