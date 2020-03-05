import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { reducer as formReducer } from 'redux-form';
import { rootSaga } from './sagas';
import { ApplicationState, reducers } from './reducers';

export default function configureStore(history: History, initialState?: ApplicationState) {

    const sagaMiddleware = createSagaMiddleware();

    const middleware = [
        sagaMiddleware,
        routerMiddleware(history)
    ];

    const rootReducer = combineReducers({
        ...reducers,
        form: formReducer,
        router: connectRouter(history)
    });

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window as any;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers),
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
