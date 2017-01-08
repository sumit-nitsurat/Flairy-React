import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/app';
import MainCarousal from './components/main-carousal';
import AboutUs from './components/about-us';
import LoginPage from './containers/login-page';
import {browserHistory, IndexRoute, Router, Route} from 'react-router';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} >  
            <Route path='/' component={App}>
                <IndexRoute component={MainCarousal}/>
                <Route path='/about' component={AboutUs}/>
                <Route path='/login' component={LoginPage}/>
            </Route>    
        </Router>
    </Provider>,
    document.getElementById('root')
);
