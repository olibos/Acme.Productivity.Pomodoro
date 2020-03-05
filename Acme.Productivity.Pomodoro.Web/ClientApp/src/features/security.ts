const TOKEN_KEY = 'auth';

export const saveToken = (token: string) : void =>
{
    localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () : void =>
{
    localStorage.removeItem(TOKEN_KEY);
};

export const isLogged = () : boolean =>
{
    return !!localStorage.getItem(TOKEN_KEY);
};

export const getToken = () : string | null =>
{
    const bearer = localStorage.getItem(TOKEN_KEY);

    if (bearer)
    {
        return bearer.toString();
    }

    return null;
};