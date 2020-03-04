import { Action, Reducer } from 'redux';
import { actionIds, BaseAction } from './Actions';

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

    const action = incomingAction as BaseAction;

    switch (action.type)
    {
        case actionIds.USER_AUTHENTICATION_SUCCESS :
            return {
                isConnected: true,
            };
        case actionIds.USER_AUTHENTICATION_DISCONNECTED:
            return unloadedState;
    }

    return state;
};