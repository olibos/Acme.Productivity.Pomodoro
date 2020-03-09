import { call, put, takeLatest } from 'redux-saga/effects';
import { userActions } from '../user/actions';
import { projectActions, projectEditEnd, projectRefreshSuccess, projectsRefreshStart } from './actions';
import { createProject, getProjects, updateProject } from './service';
import { Project } from './types';
import { BaseAction } from '../actions';

export function* manageProjects()
{
    yield takeLatest(
        userActions.USER_AUTHENTICATION_SUCCESS,
        refreshProjects,
    );

    yield takeLatest(
        projectActions.PROJECTS_REFRESH_START,
        refreshProjects,
    );

    yield takeLatest(
        projectActions.PROJECTS_EDIT_SAVE,
        saveProject,
    );
}

export function* refreshProjects()
{
    const projects = yield call(getProjects);
    yield put(projectRefreshSuccess(projects));
}

export function* saveProject(action: BaseAction<Project>)
{
    if (action.payload.id === '')
    {
        yield call(createProject, action.payload);
    }
    else
    {
        yield call(updateProject, action.payload);
    }

    yield put(projectEditEnd());
    yield put(projectsRefreshStart());
}