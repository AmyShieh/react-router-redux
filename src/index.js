import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,
        Route,
        Redirect,
        Switch} from 'react-router-dom'

import reducer from './reducer'
import App from './App';
import AuthRoute from './component/authroute/authroute';
import Login from './container/login/login.js';
import Register from './container/register/register';

import 'antd-mobile/dist/antd-mobile.css';

//
// const store = createStore(reducer,compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ?
//     window.devToolsExtension():
//     ()=>{}
// ))

ReactDOM.render(
    (<Provider >
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);
