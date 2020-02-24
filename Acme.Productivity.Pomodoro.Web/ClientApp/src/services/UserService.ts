import { AjaxService } from './AjaxService';

export const UserService = {
    login: (username: string, password: string) => {
        return AjaxService.post("/api/authenticate", {
            username,
            password
        });
    }
};