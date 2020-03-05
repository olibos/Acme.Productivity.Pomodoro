import { call, put, takeLatest } from 'redux-saga/effects';
import { userActions } from '../user/actions';
import { projectActions, projectRefreshSuccess } from './actions';
import { getProjects } from './service';

export function* manageProjects()
{
    yield takeLatest(
        userActions.USER_AUTHENTICATION_SUCCESS,
        refreshProjects
    );

    yield takeLatest(
        projectActions.PROJECTS_REFRESH_START,
        refreshProjects
    );
}

export function* refreshProjects()
{
    const projects = yield call(getProjects);
    yield put(projectRefreshSuccess(projects));
}