import { getToken } from './security';

const baseHeaders: string[][] = [];
baseHeaders.push(['Accept-Language', document.querySelector('html')!.lang]);
baseHeaders.push(['Content-Type', 'application/json']);
baseHeaders.push(['pragma', 'no-cache']);
baseHeaders.push(['cache-control', 'no-cache']);

const getHeaders = () : string[][] =>
{
    const headers = [...baseHeaders];

    const bearer = getToken();
    if (bearer)
    {
        headers.push(["Authorization", "Bearer " + bearer]);
    }

    return headers;
};

export const postNoData = (route: RequestInfo): Promise<void> =>
{
    return new Promise<void>((resolve, reject) =>
    {
        const headers = getHeaders();

        fetch(route,
            {
                headers,
                method: 'post',
            })
            .then((response) =>
            {
                if (response.ok)
                {
                    resolve();
                }
                else
                {
                    reject(response.status);
                }
            });
    });
};

export const post = <Tin, Tout>(route: RequestInfo, data: Tin): Promise<Tout> =>
{
    return new Promise<Tout>((resolve, reject) =>
    {
        const headers = getHeaders();

        fetch(route,
            {
                headers,
                method: 'post',
                body: JSON.stringify(data),
            })
            .then((response) =>
            {
                if (response.ok)
                {
                    if (response.status !== 204)
                    {
                        resolve(response.json());
                    }
                    else
                    {
                        resolve();
                    }
                }
                else
                {
                    reject(response.status);
                }
            });
    });
};

export const put = <Tin>(route: RequestInfo, data: Tin): Promise<boolean> =>
{
    return new Promise<boolean>((resolve, reject) =>
    {
        const headers = getHeaders();

        fetch(route,
            {
                headers,
                method: 'post',
                body: JSON.stringify(data),
            })
            .then((response) =>
            {
                if (response.ok)
                {
                    resolve(true);
                }
                else
                {
                    reject(false);
                }
            });
    });
};

export const get = <Tout>(route: RequestInfo): Promise<Tout> =>
{
    return new Promise<Tout>((resolve, reject) =>
    {
        const headers = getHeaders();

        return fetch(route,
            {
                headers,
                method: 'get',
            })
            .then((response) =>
            {
                if (response.ok)
                {
                    if (response.status !== 204)
                    {
                        resolve(response.json());
                    }
                    else
                    {
                        resolve();
                    }
                }
                else
                {
                    reject(null);
                }
            });
    });
};