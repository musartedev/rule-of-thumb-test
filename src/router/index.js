// eslint-disable react/jsx-filename-extension
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import ROUTES from './routes';

const Router = () => {
  return (
    <Switch>
      {ROUTES.map(({ exact, path, component, key }) => {
        return (
          <Route component={component} path={path} exact={exact} key={key} />
        );
      })}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
