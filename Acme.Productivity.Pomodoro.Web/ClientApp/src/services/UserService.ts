import { AjaxService } from './AjaxService';

export const recoverSession = (): Promise<boolean> =>
{
    return AjaxService.get('/api/authenticate/check').then(() =>
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
    return AjaxService.post<{}, any>('/api/authenticate', {
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