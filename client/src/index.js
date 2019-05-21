import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Router from './components/Router';

const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(promise, thunk), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <Router />
    </BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
