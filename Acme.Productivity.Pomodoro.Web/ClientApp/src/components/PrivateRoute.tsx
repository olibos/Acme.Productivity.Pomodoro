import { Redirect, Route } from "react-router";
import React from "react";
import { isLogged } from '../features/security';

export const PrivateRoute = ({component, ...rest}: any) =>
{
    const routeComponent = (props: any) => (
        isLogged()
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/login'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};