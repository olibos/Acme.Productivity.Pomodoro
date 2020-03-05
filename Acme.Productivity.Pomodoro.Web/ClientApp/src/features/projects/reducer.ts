import { Action, Reducer } from 'redux';
import { BaseAction } from '../actions';
import { Project } from './types';
import { projectActions } from './actions';

export interface ProjectsState
{
    projects: Project[];
    current: Project | null;
}

// Default state and reducer to change the state when action is done
const unloadedState: ProjectsState = {
    projects: [],
    current: null
};

export const reducer: Reducer<ProjectsState> = (state: ProjectsState | undefined, incomingAction: Action): ProjectsState =>
{
    if (state === undefined)
    {
        return unloadedState;
    }

    const action = incomingAction as BaseAction;

    switch (action.type)
    {
        case projectActions.PROJECTS_REFRESH_SUCCESS:
            return {...state, projects: action.payload };

        case projectActions.PROJECTS_SELECTION_CHANGE:
            return {...state, current: action.payload };
    }

    return state;
};