import { all, fork, put } from 'redux-saga/effects';
import { manageAuthentication } from './user.sagas';
import { userAuthenticationRecover } from '../store/Actions';

function* initialSaga() {
    yield put(userAuthenticationRecover());
}

export const rootSaga = function* root() {
    yield fork(initialSaga);
    yield all([fork(manageAuthentication)]);
};