import React from 'react';
import AddRecipeForm from './AddRecipeForm';

class Recipes extends React.Component{
  render(){
    return(
      <div className="recipe">
        <h1>{this.props.heading}</h1>
        <AddRecipeForm addRecipe={this.props.addRecipe}></AddRecipeForm>
        <button onClick={this.props.loadCurrentRecipes}>Load Current Recipes</button>
      </div>
    )
  }
}

export default Recipes;