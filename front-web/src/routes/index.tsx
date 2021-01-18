import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Orders from '../pages/Orders';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/orders" component={Orders} />
  </Switch>
);

export default Routes;
