import React from 'react';
import { Route, Switch } from 'react-router';

// PAGES
import Landing from './Containers/Landing';
import NotFound from './Components/NotFound';

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    {/*<Route path='/<path-name>' component={Component} />*/}
    <Route component={NotFound} />
  </Switch>
);
