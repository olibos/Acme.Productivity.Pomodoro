import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export default () => (
    <I18nextProvider i18n={i18n}>
        <Layout>
            <Route path='/login' component={Login}/>
            <PrivateRoute exact path='/' component={Home}/>
        </Layout>
    </I18nextProvider>
);
