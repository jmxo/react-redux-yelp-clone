import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
