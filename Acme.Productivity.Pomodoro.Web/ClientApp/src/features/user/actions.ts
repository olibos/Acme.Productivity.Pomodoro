import { BaseAction } from '../actions';
import { IUserAuthentication, IUserBearer } from './types';

export const userActions = {
    USER_AUTHENTICATION_RECOVER: '@@user/USER_AUTHENTICATION_RECOVER',
    USER_AUTHENTICATION_START: '@@user/USER_AUTHENTICATION_START',
    USER_AUTHENTICATION_SUCCESS: '@@user/USER_AUTHENTICATION_SUCCESS',
    USER_AUTHENTICATION_FAILED: '@@user/USER_AUTHENTICATION_FAILED',
    USER_AUTHENTICATION_DISCONNECTED: '@@user/USER_AUTHENTICATION_DISCONNECTED'
};

export const userAuthenticationRecover = (): BaseAction<null> => ({
    type: userActions.USER_AUTHENTICATION_RECOVER,
    payload: null,
});

export const userAuthenticationStart = (
    username: string,
    password: string
): BaseAction<IUserAuthentication> => ({
    type: userActions.USER_AUTHENTICATION_START,
    payload: {
        username,
        password
    },
});

export const userAuthenticationSuccess = (
    bearer: string | null,
): BaseAction<IUserBearer> => ({
    type: userActions.USER_AUTHENTICATION_SUCCESS,
    payload: {
        bearer
    },
});

export const userAuthenticationFailed = (): BaseAction<null> => ({
    type: userActions.USER_AUTHENTICATION_FAILED,
    payload: null,
});

export const userAuthenticationDisconnected = (): BaseAction<null> => ({
    type: userActions.USER_AUTHENTICATION_DISCONNECTED,
    payload: null,
});