import { Action, Reducer } from 'redux';
import { BaseAction } from '../actions';
import { Projects } from './types';
import { projectActions } from './actions';

export interface ProjectsState
{
    projects: Projects[];
}

// Default state and reducer to change the state when action is done
const unloadedState: ProjectsState = {projects: []};

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
            return {
                projects: action.payload
            };
    }

    return state;
};