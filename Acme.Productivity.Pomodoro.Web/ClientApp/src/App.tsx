import * as React from 'react';
import { Route } from 'react-router';
import { I18nextProvider } from 'react-i18next';
import i18n from './features/translations';

import './custom.css';
import Layout from './components/design/Layout';
import { PrivateRoute } from './components/shared/PrivateRoute';
import Login from './components/Login';
import Home from './components/Home';
import ProjectEditionModal from './components/projects/ProjectEditionModal';

export default () => (
    <I18nextProvider i18n={i18n}>
        <Layout>
            <Route path='/login' component={Login}/>

            <PrivateRoute exact path='/' component={Home}/>

            <ProjectEditionModal />
        </Layout>
    </I18nextProvider>
);
