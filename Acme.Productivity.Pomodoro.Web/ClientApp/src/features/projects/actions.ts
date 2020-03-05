import { BaseAction } from '../actions';
import { Projects } from './types';

export const projectActions = {
    PROJECTS_REFRESH_START: '@@projects/PROJECTS_REFRESH_START',
    PROJECTS_REFRESH_SUCCESS: '@@projects/PROJECTS_REFRESH_SUCCESS',
};

export const projectRefreshStart = (): BaseAction => ({
    type: projectActions.PROJECTS_REFRESH_START,
    payload: null,
});

export const projectRefreshSuccess = (projects:  Projects[]): BaseAction => ({
    type: projectActions.PROJECTS_REFRESH_SUCCESS,
    payload: projects,
});