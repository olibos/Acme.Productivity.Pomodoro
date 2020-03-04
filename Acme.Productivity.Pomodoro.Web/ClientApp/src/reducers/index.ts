import * as CurrentUser from './currentUser';
import * as Projects from './projects';

// The top-level state object
export interface ApplicationState {
    currentUser: CurrentUser.UserState | undefined;
    projects: Projects.ProjectsState | undefined;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    currentUser: CurrentUser.reducer,
    projects: Projects.reducer
};