import { Action, Reducer } from 'redux';
import { actionIds, BaseAction } from '../sagas/actions';

export interface Projects
{
    id: string;
    name: string;
}

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
        case actionIds.PROJECTS_REFRESH_SUCCESS:
            return {
                projects: action.payload
            };
    }

    return state;
};