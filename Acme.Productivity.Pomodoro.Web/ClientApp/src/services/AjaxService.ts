import { Security } from '../utils/Security';

const baseHeaders: string[][] = [];
baseHeaders.push(['Accept-Language', document.querySelector('html')!.lang]);
baseHeaders.push(['Content-Type', 'application/json']);
baseHeaders.push(['pragma', 'no-cache']);
baseHeaders.push(['cache-control', 'no-cache']);

export const AjaxService = {
    getHeaders() : string[][]
    {
      const headers = [...baseHeaders];

        const bearer = Security.getToken();
        if (bearer)
        {
            headers.push(["Authorization", "Bearer " + bearer]);
        }

        return headers;
    },
    postNoData(route: RequestInfo): Promise<void>
    {
        return new Promise<void>((resolve, reject) =>
        {
            const headers = AjaxService.getHeaders();

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
    },
    post<Tin, Tout>(route: RequestInfo, data: Tin): Promise<Tout>
    {
        return new Promise<Tout>((resolve, reject) =>
        {
            const headers = AjaxService.getHeaders();

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
    },
    put<Tin>(route: RequestInfo, data: Tin): Promise<boolean>
    {
        return new Promise<boolean>((resolve, reject) =>
        {
            const headers = AjaxService.getHeaders();

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
    },
    get<Tout>(route: RequestInfo): Promise<Tout>
    {
        return new Promise<Tout>((resolve, reject) =>
        {
            const headers = AjaxService.getHeaders();

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
    },
};