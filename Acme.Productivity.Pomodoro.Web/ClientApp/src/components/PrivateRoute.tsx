import { Redirect, Route } from "react-router";
import { Security } from "../utils/Security";
import React from "react";

export const PrivateRoute = ({component, ...rest}: any) => {
    const routeComponent = (props: any) => (
        Security.isLogged()
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/login'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};