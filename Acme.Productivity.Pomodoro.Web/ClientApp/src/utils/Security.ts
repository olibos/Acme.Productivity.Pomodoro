const TOKEN_KEY = 'auth';

export const Security = {

    saveToken: (token: string) =>
    {
        localStorage.setItem(TOKEN_KEY, token);
    },

    logout: () =>
    {
        localStorage.removeItem(TOKEN_KEY);
    },

    isLogged: () =>
    {
        return !!localStorage.getItem(TOKEN_KEY);
    },

    getToken: () => {
        return localStorage.getItem(TOKEN_KEY);
    }
};
