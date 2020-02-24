const headers: string[][] = [];
headers.push(['Accept-Language', document.querySelector('html')!.lang]);
headers.push(['Content-Type', 'application/json']);
headers.push(['pragma', 'no-cache']);
headers.push(['cache-control', 'no-cache']);

export const AjaxService = {
    postNoData(route: RequestInfo): Promise<void>
    {
        return new Promise<void>((resolve, reject) =>
        {
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