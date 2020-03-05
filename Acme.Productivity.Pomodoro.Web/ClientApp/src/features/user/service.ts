import { get, post } from '../ajax';
import { logout, saveToken } from '../security';
import { history } from '../../index';
import { BaseAction } from '../actions';

export const recoverSession = (): Promise<boolean> =>
{
    return get('/api/authenticate/check').then(() =>
    {
        return true;
    })
        .catch(() =>
        {
            return false;
        });
};

export const authenticateUser = (username: string, password: string): Promise<string | null> =>
{
    return post<{}, any>('/api/authenticate', {
        username,
        password,
    }).then((data) =>
    {
        return data.bearer;
    }).catch(() =>
    {
        return null;
    });
};

export const disconnectUser = () =>
{
    logout();
    history.push('/login');
};

export const connectUser = (action: BaseAction) =>
{
    saveToken(action.payload.bearer);
    history.push('/');
};