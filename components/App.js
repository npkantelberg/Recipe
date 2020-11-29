import React from 'react';
import Recipes from './Recipes';
import GroceryList from './GroceryList';
import Ingredients from './ingredients';
import Instructions from './Instructions'; 
import Search from './Search';


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
  }

  render(){
    return(
      <div className="react-wrapper">
        <Search></Search>
        <Recipes addRecipe={this.addRecipe} heading="Choose a recipe!"></Recipes>
        <GroceryList></GroceryList>
        <Ingredients></Ingredients>
        <Instructions></Instructions>
      </div>
    )
  }
}

export default App;