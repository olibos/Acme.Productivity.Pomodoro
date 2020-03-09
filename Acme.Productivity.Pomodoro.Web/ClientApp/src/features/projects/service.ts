import { Project } from './types';
import { get, post } from '../ajax';

export const getProjects = (): Promise<Project[]> =>
{
    return get<Project[]>('/api/projects');
};

export const createProject= (project: Project): Promise<any> =>
{
    project.id = '00000000-0000-0000-0000-000000000000';
    return post<Project, any>('/api/projects', project);
};

export const updateProject= (project: Project): Promise<any> =>
{
    return post<Project, any>('/api/projects/' + project.id, project);
};