import { Action, Reducer } from 'redux';
import { AppThunkAction } from "./index";
import { Security } from "../utils/Security";
import { history } from "../index";

// State linked to the store
export interface UserState
{
    username: string | null;
    bearer: string | null;
}

// Interface for all actions
export interface AuthenticateUser
{
    type: 'AUTHENTICATE_USER',
    username: string
}

export interface UserAuthenticated
{
    type: 'USER_AUTHENTICATED',
    username: string,
    bearer: string
}

// Group all known actions
export type KnownAction = AuthenticateUser | UserAuthenticated;

// Export the actions to be used in components.
export const actionCreators = {
    login: (username: string): AppThunkAction<KnownAction> => (dispatch, getState) =>
    {
        // const appState = getState();
        dispatch({
            type: "USER_AUTHENTICATED",
            username: "plop",
            bearer: "plip",
        });
        Security.saveToken("plip");
        history.push("/");
    },
};

// Default state and reducer to change the state when action is done
const unloadedState: UserState = {username: null, bearer: null};

export const reducer: Reducer<UserState> = (state: UserState | undefined, incomingAction: Action): UserState =>
{
    if (state === undefined)
    {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;

    switch (action.type)
    {
        case "USER_AUTHENTICATED":
            return {
                username: action.username,
                bearer: action.bearer,
            };
    }

    return state;
};