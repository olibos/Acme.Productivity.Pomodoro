import { Projects } from './models';
import { get } from '../ajax';

export const getProjects = (): Promise<Projects[]> =>
{
    return get<Projects[]>('/api/projects').then((data) =>
    {
        return data;
    });
};