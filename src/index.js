import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {
    Switch,
    Route,
    BrowserRouter,
    Redirect
} from 'react-router-dom'
import reducers from './reducer/index'
import App from './App'
import 'antd/dist/antd.css'

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ?
    window.devToolsExtension():
    ()=>{}
))

ReactDOM.render((
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={App}></Route>
                    {/*<App />*/}
                </Switch>
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root')
);