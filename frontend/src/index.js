import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-ReduxThunk'
import { Provider } from 'react-redux'
import { rootReducer } from './state/reducers/index';
import { initialState } from './state/reducers/helpers/initialState'
import './stylesheets/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const middleware = compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(rootReducer, initialState, middleware);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
