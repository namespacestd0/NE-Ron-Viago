import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/users/HomePage';
import AboutPage from './components/users/AboutPage';
import OrderPage from './components/users/manager/OrderPage';
import EditOrderPage from './components/users/manager/OrderEditPage'; //eslint-disable-line import/no-named-as-default
import RequestQuotePage from './components/users/customer/RequestQuotePage';
import RequestReceivedPage from './components/users/customer/RequestReceivedPage';
import AssignedWorkPage from './components/users/worker/AssignedWorkPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="orders" component={OrderPage} />
    <Route path="order" component={EditOrderPage} />
    <Route path="order/:id" component={EditOrderPage} />
    <Route path="about" component={AboutPage} />
    <Route path="quote" component={RequestQuotePage} />
    <Route path="success" component={RequestReceivedPage} />
    <Route path="worker" component={AssignedWorkPage} />
  </Route>
);
