import { all, fork } from 'redux-saga/effects';
import { manageAuthentication } from './user.sagas';

export const rootSaga = function* root() {
    yield all([fork(manageAuthentication)]);
};