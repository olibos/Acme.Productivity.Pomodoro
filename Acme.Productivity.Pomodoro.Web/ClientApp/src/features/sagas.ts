import { all, fork, put } from 'redux-saga/effects';
import { userAuthenticationRecover } from './user/actions';
import { manageAuthentication } from './user/saga';
import { manageProjects } from './projects/saga';

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