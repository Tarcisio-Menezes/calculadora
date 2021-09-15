import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

function Main() {
  return(
    <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/about" component={ About } />
    <Route exact path="*" component={ NotFound } />
  </Switch>
  );
}

export default Main;
