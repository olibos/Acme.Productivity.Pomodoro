import * as React from "react";
import { Redirect, Route } from "react-router";
import { isLogged } from '../../features/security';

export const PrivateRoute = ({component, ...rest}: any) =>
{
    const routeComponent = (props: any) => (
        isLogged()
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/login'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};