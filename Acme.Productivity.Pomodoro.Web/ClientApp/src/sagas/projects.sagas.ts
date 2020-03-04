import { call, put, takeLatest } from 'redux-saga/effects';
import { getProjects } from '../services/projectsService';
import { actionIds, projectRefreshSuccess } from './actions';

export function* manageProjects()
{
    yield takeLatest(
        actionIds.USER_AUTHENTICATION_SUCCESS,
        refreshProjects
    );

    yield takeLatest(
        actionIds.PROJECTS_REFRESH_START,
        refreshProjects
    );
}

export function* refreshProjects()
{
    const projects = yield call(getProjects);
    yield put(projectRefreshSuccess(projects));
}