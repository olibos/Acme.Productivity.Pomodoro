import { all, fork, put } from 'redux-saga/effects';
import { manageAuthentication } from './user.sagas';
import { manageProjects } from './projects.sagas';
import { userAuthenticationRecover } from './actions';

function* initialSaga()
{
    yield put(userAuthenticationRecover());
}

export const rootSaga = function* root()
{
    yield fork(initialSaga);
    yield all([
        fork(manageAuthentication),
        fork(manageProjects),
    ]);
};