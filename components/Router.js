import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import GroceryList from './GroceryList';
import NotFound from './NotFound';
import MealPlan from './MealPlan';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/:recipeBookId" component={App}></Route>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/grocerylist" component={GroceryList}></Route>
      <Route exact path="/mealplan" component={MealPlan}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
)

export default Router;