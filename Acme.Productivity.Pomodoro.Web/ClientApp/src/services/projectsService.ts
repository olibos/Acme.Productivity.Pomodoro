import { AjaxService } from './AjaxService';
import { Projects } from '../reducers/projects';

export const getProjects = (): Promise<Projects[]> =>
{
    return AjaxService.get<Projects[]>('/api/projects').then((data) =>
    {
        return data;
    });
};