import { BaseAction } from '../actions';
import { Project } from './types';

export const projectActions = {
    PROJECTS_REFRESH_START: '@@projects/PROJECTS_REFRESH_START',
    PROJECTS_REFRESH_SUCCESS: '@@projects/PROJECTS_REFRESH_SUCCESS',
    PROJECTS_SELECTION_CHANGE: '@@projects/PROJECTS_SELECTION_CHANGE'
};

export const projectRefreshStart = (): BaseAction => ({
    type: projectActions.PROJECTS_REFRESH_START,
    payload: null,
});

export const projectRefreshSuccess = (projects:  Project[]): BaseAction => ({
    type: projectActions.PROJECTS_REFRESH_SUCCESS,
    payload: projects,
});

export const projectSelectionChange = (project: Project): BaseAction => ({
    type: projectActions.PROJECTS_SELECTION_CHANGE,
    payload: project
});

