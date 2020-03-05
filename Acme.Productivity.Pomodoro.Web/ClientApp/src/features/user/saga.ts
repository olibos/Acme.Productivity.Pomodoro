import { call, put, takeLatest } from 'redux-saga/effects';

import {
    userActions,
    userAuthenticationDisconnected,
    userAuthenticationFailed,
    userAuthenticationSuccess,
} from './actions';

import { BaseAction } from '../actions';
import { authenticateUser, connectUser, disconnectUser, recoverSession } from './service';
import { getToken } from '../security';

export function* manageAuthentication()
{
    yield takeLatest(
        userActions.USER_AUTHENTICATION_RECOVER,
        recoverUserAuthentication,
    );

    yield takeLatest(
        userActions.USER_AUTHENTICATION_DISCONNECTED,
        disconnectUser,
    );

    yield takeLatest(
        userActions.USER_AUTHENTICATION_START,
        userAuthenticationStart,
    );

    yield takeLatest(
        userActions.USER_AUTHENTICATION_SUCCESS,
        connectUser
    )
}

export function* userAuthenticationStart(action: BaseAction)
{
    const bearer = yield call(authenticateUser, action.payload.username, action.payload.password);
    if (bearer)
    {
        yield put(userAuthenticationSuccess(bearer));
    }
    else
    {
        yield put(userAuthenticationFailed());
    }
}

export function* recoverUserAuthentication()
{
    const bearer = getToken();

    if (!bearer)
    {
        yield put(userAuthenticationDisconnected());
        return;
    }

    const recovered = yield call(recoverSession);
    if (recovered)
    {
        yield put(userAuthenticationSuccess(getToken()));
    }
    else
    {
        yield put(userAuthenticationDisconnected());
    }
}