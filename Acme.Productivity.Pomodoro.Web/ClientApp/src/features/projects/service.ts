import { Project } from './types';
import { get } from '../ajax';

export const getProjects = (): Promise<Project[]> =>
{
    return get<Project[]>('/api/projects').then((data) =>
    {
        return data;
    });
};