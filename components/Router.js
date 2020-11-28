import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import GroceryList from './GroceryList';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/grocerylist" component={GroceryList}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
)

export default Router;