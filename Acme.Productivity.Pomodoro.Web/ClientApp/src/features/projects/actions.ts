import { BaseAction } from '../actions';
import { Project } from './types';

export const projectActions = {
    PROJECTS_REFRESH_START: '@@projects/PROJECTS_REFRESH_START',
    PROJECTS_REFRESH_SUCCESS: '@@projects/PROJECTS_REFRESH_SUCCESS',
    PROJECTS_SELECTION_CHANGE: '@@projects/PROJECTS_SELECTION_CHANGE',
    PROJECTS_EDIT_START: '@@projects/PROJECTS_EDIT_START',
    PROJECTS_EDIT_START_NEW: '@@projects/PROJECTS_EDIT_START_NEW',
    PROJECTS_EDIT_SAVE: '@@projects/PROJECTS_EDIT_SAVE',
    PROJECTS_EDIT_END: '@@projects/PROJECTS_EDIT_END',
};

export const projectsRefreshStart = (): BaseAction<null> => ({
    type: projectActions.PROJECTS_REFRESH_START,
    payload: null,
});

export const projectRefreshSuccess = (projects:  Project[]): BaseAction<Project[]> => ({
    type: projectActions.PROJECTS_REFRESH_SUCCESS,
    payload: projects,
});

export const projectSelectionChange = (project: Project): BaseAction<Project> => ({
    type: projectActions.PROJECTS_SELECTION_CHANGE,
    payload: project
});

export const projectEditStartNew = (): BaseAction<null> => ({
    type: projectActions.PROJECTS_EDIT_START_NEW,
    payload: null,
});

export const projectEditStart = (project: Project | null): BaseAction<Project | null> => ({
    type: projectActions.PROJECTS_EDIT_START,
    payload: project,
});

export const projectEditSave = (project: Project): BaseAction<Project> => ({
    type: projectActions.PROJECTS_EDIT_SAVE,
    payload: project,
});

export const projectEditEnd = (): BaseAction<null> => ({
    type: projectActions.PROJECTS_EDIT_END,
    payload: null,
});

