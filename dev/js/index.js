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
import JobsView from './containers/jobs/jobs-view';
import LoginPage from './containers/login-page';
import UserDetail from './containers/user-landing/user-detail';
import Categories from './containers/user-landing/categories';
import JobsHistoryView from './containers/jobs-history/jobs-history-view';
import AllJobsHistory from './containers/jobs-history/all-jobs-history';
import InProgressJobs from './containers/jobs-history/inprogress-jobs';
import PaymentRequested from './containers/jobs-history/payment-requested';
import JobPostForm from './containers/create-jobs/job-post-form';
import FreelancerProfile from './containers/freelancer/freelancer-profile';
import {browserHistory, hashHistory, IndexRoute, Router, Route} from 'react-router';

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
                <Route path='about' component={AboutUs}/>
                <Route path='login' component={LoginPage}/>
            </Route>
            <Route path='/profile/:name' component={UserDetail}>
                <IndexRoute component={Categories}/>
                <Route path='/jobs/:cat' component={JobsView}></Route>
                <Route path='/jobs-history/all' component={JobsHistoryView}>
                    <IndexRoute component={AllJobsHistory}/>
                    <Route path='/jobs-history/in-progress' component={InProgressJobs}></Route>
                    <Route path='/jobs-history/payment-requested' component={PaymentRequested}></Route>
                </Route>
                <Route path='/job-post' component={JobPostForm}></Route>
                <Route path='/find-freelancer' component={FreelancerProfile}></Route>
            </Route>         
        </Router>
    </Provider>,
    document.getElementById('root')
);
