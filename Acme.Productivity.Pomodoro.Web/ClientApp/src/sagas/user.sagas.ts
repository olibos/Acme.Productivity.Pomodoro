import { call, put, takeLatest } from 'redux-saga/effects';
import {
    actionIds, BaseAction,
    userAuthenticationDisconnected,
    userAuthenticationFailed,
    userAuthenticationSuccess,
} from './actions';
import { authenticateUser, recoverSession } from '../services/userService';
import { Security } from '../utils/Security';
import { history } from '../index';

export function* manageAuthentication()
{
    yield takeLatest(
        actionIds.USER_AUTHENTICATION_RECOVER,
        recoverUserAuthentication,
    );

    yield takeLatest(
        actionIds.USER_AUTHENTICATION_DISCONNECTED,
        disconnectUser,
    );

    yield takeLatest(
        actionIds.USER_AUTHENTICATION_START,
        userAuthenticationStart,
    );

    yield takeLatest(
        actionIds.USER_AUTHENTICATION_SUCCESS,
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
    const bearer = Security.getToken();

    if (!bearer)
    {
        yield put(userAuthenticationDisconnected());
        return;
    }

    const recovered = yield call(recoverSession);
    if (recovered)
    {
        yield put(userAuthenticationSuccess(Security.getToken()));
    }
    else
    {
        yield put(userAuthenticationDisconnected());
    }
}

export function disconnectUser()
{
    Security.logout();
    history.push('/login');
}

export function connectUser(action: BaseAction)
{
    Security.saveToken(action.payload.bearer);
    history.push('/');
}