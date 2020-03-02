// State linked to the store
import { AppThunkAction } from './index';
import { AjaxService } from '../services/AjaxService';
import { Action, Reducer } from 'redux';

export interface Projects
{
    id: string;
    name: string;
}

export interface ProjectsState
{
    projects: Projects[];
}

// Interface for all actions
export interface ProjectsRefresh
{
    type: 'PROJECTS_REFRESH',
}

export interface ProjectsLoaded
{
    type: 'PROJECTS_LOADED',
    projects: Projects[],
}

// Group all known actions
export type KnownAction = ProjectsRefresh | ProjectsLoaded;

// Service
export const projectService = {
    refresh(dispatch: (action: KnownAction) => void)
    {
        AjaxService.get<Projects[]>('/api/projects').then((data) =>
        {
            dispatch({
                type: 'PROJECTS_LOADED',
                projects: data,
            });
        });
    },
    create(dispatch: (action: KnownAction) => void, name: string)
    {
        AjaxService.post('/api/projects', { name }).then(() => {
            projectService.refresh(dispatch);
        });
    },
};

// Export the actions to be used in components.
export const actionCreators = {
    refreshProjects: (): AppThunkAction<KnownAction> => (dispatch) =>
    {
       projectService.refresh(dispatch);
    },
    addProject : (name: string): AppThunkAction<KnownAction> => (dispatch) =>
    {
        projectService.create(dispatch, name)
    }
};

// Default state and reducer to change the state when action is done
const unloadedState: ProjectsState = {projects: []};

export const reducer: Reducer<ProjectsState> = (state: ProjectsState | undefined, incomingAction: Action): ProjectsState =>
{
    if (state === undefined)
    {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;

    switch (action.type)
    {
        case 'PROJECTS_LOADED':
            state.projects = action.projects;
            break;
    }

    return state;
};