import React from 'react';
import Recipes from './Recipes';
import GroceryList from './GroceryList';
import Ingredients from './Ingredients';
import Instructions from './Instructions'; 
import Search from './Search';
import currentRecipes from '../current-recipes';
import Recipe from './Recipe';

class App extends React.Component{

  state = {
    recipes: {}
  };
  addRecipe = (recipe) => {
    const recipes = {...this.state.recipes};

    recipes[`recipe${Date.now()}`] = recipe;

    this.setState({
      recipes: recipes
    });

    console.log(recipes);
  }
  loadCurrentRecipes = (e) => {
    this.setState({
      recipes: currentRecipes
    })
  }

  render(){
    return(
      <div className="react-wrapper">
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-calendar-alt"></i>
        <i className="fas fa-drumstick-bite"></i>
        <Search></Search>
        <Recipes loadCurrentRecipes={this.loadCurrentRecipes} addRecipe={this.addRecipe} heading="Choose a recipe!"></Recipes>
        {Object.keys(this.state.recipes).map(key => <Recipe details={this.state.recipes[key]}></Recipe>)}
      </div>
    )
  }
}

export default App;