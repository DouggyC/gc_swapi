import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from './screens/HomePage'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
    </Switch>
  </>
);

export default App;
