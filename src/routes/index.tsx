import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import { Home } from 'pages/Home';
import { User } from 'pages/User';

const Routes = () => (
  <Switch>
    <Route path="/" exact Component={Home} />
    <Route path="/user" Component={User} />
  </Switch>
);

export default Routes;
