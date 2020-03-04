import { Projects } from '../reducers/projects';

export const actionIds = {
    USER_AUTHENTICATION_RECOVER: 'USER_AUTHENTICATION_RECOVER',
    USER_AUTHENTICATION_START: 'USER_AUTHENTICATION_START',
    USER_AUTHENTICATION_SUCCESS: 'USER_AUTHENTICATION_SUCCESS',
    USER_AUTHENTICATION_FAILED: 'USER_AUTHENTICATION_FAILED',
    USER_AUTHENTICATION_DISCONNECTED: 'USER_AUTHENTICATION_DISCONNECTED',

    PROJECTS_REFRESH_START: 'PROJECTS_REFRESH_START',
    PROJECTS_REFRESH_SUCCESS: 'PROJECTS_REFRESH_SUCCESS',
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

export const projectRefreshStart = (): BaseAction => ({
    type: actionIds.PROJECTS_REFRESH_START,
    payload: null,
});

export const projectRefreshSuccess = (projects:  Projects[]): BaseAction => ({
    type: actionIds.PROJECTS_REFRESH_SUCCESS,
    payload: projects,
});