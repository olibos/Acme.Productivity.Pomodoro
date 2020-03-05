import { BaseAction } from '../actions';
import { Project } from './types';

export const projectActions = {
    PROJECTS_REFRESH_START: '@@projects/PROJECTS_REFRESH_START',
    PROJECTS_REFRESH_SUCCESS: '@@projects/PROJECTS_REFRESH_SUCCESS',
    PROJECTS_SELECTION_CHANGE: '@@projects/PROJECTS_SELECTION_CHANGE',
    PROJECTS_EDIT_START: '@@projects/PROJECTS_EDIT_START',
    PROJECTS_EDIT_START_NEW: '@@projects/PROJECTS_EDIT_START_NEW',
    PROJECTS_EDIT_END: '@@projects/PROJECTS_EDIT_END',
};

export const projectRefreshSuccess = (projects:  Project[]): BaseAction => ({
    type: projectActions.PROJECTS_REFRESH_SUCCESS,
    payload: projects,
});

export const projectSelectionChange = (project: Project): BaseAction => ({
    type: projectActions.PROJECTS_SELECTION_CHANGE,
    payload: project
});

export const projectEditStartNew = (): BaseAction => ({
    type: projectActions.PROJECTS_EDIT_START_NEW,
    payload: null,
});

export const projectEditEnd = (): BaseAction => ({
    type: projectActions.PROJECTS_EDIT_END,
    payload: null,
});

