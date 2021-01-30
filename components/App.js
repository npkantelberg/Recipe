import React from 'react';
import Recipes from './Recipes';
import Search from './Search';
import currentRecipes from '../current-recipes';
import Recipe from './Recipe';
import MealPlan from './MealPlan';
import GroceryList from './GroceryList';
import base from '../base';

class App extends React.Component{

  state = {
    recipes: {},
    mealplan: {},
    // grocerylist: {}
  };

  componentDidMount(){
    const localStorageRef = localStorage.getItem(this.props.match.params.recipeBookId);
    if(localStorageRef){
      this.setState({
        mealplan: JSON.parse(localStorageRef)
      });
    }

    // this ref is different than an input ref
    this.ref = base.syncState(`${this.props.match.params.recipeBookId}`, {
      context: this,
      state: 'recipes'
    });
  }

  componentDidUpdate(){
    localStorage.setItem(this.props.match.params.recipeBookId, JSON.stringify(this.state.mealplan));
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  loadCurrentRecipes = (e) => {
    this.setState({
      recipes: currentRecipes
    })
  }

  addRecipe = (recipe) => {
    const recipes = {...this.state.recipes};

    recipes[`recipe${Date.now()}`] = recipe;

    this.setState({
      recipes: recipes
    });

    console.log(recipes);
  }

  addToMealPlan = (key) => {
    const mealplan = {...this.state.mealplan};
    mealplan[key] = mealplan[key] + 1 || 1;
    // The mealplan key is 1?
    this.setState({
      mealplan: mealplan
    })
  }

  // addToGroceryList = (key) => {
  //   const grocerylist = {...this.state.grocerylist};
  //   grocerylist[key] = grocerylist[key] + 1 || 1;
  //   console.log(grocerylist);
  //   this.setState({
  //     grocerylist: grocerylist
  //   })
  // }

  removeFromMealPlan = key => {
    // Take a copy of the mealplan state
    const mealplan = {...this.state.mealplan};
    // Remove a meal from mealplan based on key
    delete mealplan[key];
    // Set the mealplan state
    this.setState({
      mealplan: mealplan
    })
  }

  render(){
    return(
      <div className="react-wrapper">
        <div className="search-wrapper">
          <Search></Search>
        </div>
        <section className="recipes-section">
          <Recipes loadCurrentRecipes={this.loadCurrentRecipes} addRecipe={this.addRecipe} heading="Choose a recipe!"></Recipes>
          {Object.keys(this.state.recipes).map(key => <Recipe key={key} index={key} addToMealPlan={this.addToMealPlan} details={this.state.recipes[key]}></Recipe>)}
        </section>
        <section className="meal-plan-section">
          {/* to pass the state we could also do {...this.state} which would pass the full state */}
          <MealPlan removeFromMealPlan={this.removeFromMealPlan} myURL={this.props.match.params.recipeBookId} recipes={this.state.recipes} mealplan={this.state.mealplan}></MealPlan>
        </section>
        <section className="grocery-list-section">
          <GroceryList recipes={this.state.recipes} mealplan={this.state.mealplan}></GroceryList>
        </section>
      </div>
    )
  }
}

export default App;