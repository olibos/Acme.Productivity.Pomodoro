import { BaseAction } from '../actions';
import { Projects } from './models';

export const projectActions = {
    PROJECTS_REFRESH_START: 'PROJECTS_REFRESH_START',
    PROJECTS_REFRESH_SUCCESS: 'PROJECTS_REFRESH_SUCCESS',
};

export const projectRefreshStart = (): BaseAction => ({
    type: projectActions.PROJECTS_REFRESH_START,
    payload: null,
});

export const projectRefreshSuccess = (projects:  Projects[]): BaseAction => ({
    type: projectActions.PROJECTS_REFRESH_SUCCESS,
    payload: projects,
});