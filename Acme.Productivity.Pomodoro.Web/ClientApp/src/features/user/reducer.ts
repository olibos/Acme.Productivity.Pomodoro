import { Action, Reducer } from 'redux';
import { BaseAction } from '../actions';
import { userActions } from './actions';

// State linked to the store
export interface UserState
{
    isConnected: boolean;
}

// Default state and reducer to change the state when action is done
const unloadedState: UserState = {isConnected: false};

export const reducer: Reducer<UserState> = (state: UserState | undefined, incomingAction: Action): UserState =>
{
    if (state === undefined)
    {
        return unloadedState;
    }

    const action = incomingAction as BaseAction<any>;

    switch (action.type)
    {
        case userActions.USER_AUTHENTICATION_SUCCESS :
            return {
                isConnected: true,
            };
        case userActions.USER_AUTHENTICATION_DISCONNECTED:
            return unloadedState;
    }

    return state;
};