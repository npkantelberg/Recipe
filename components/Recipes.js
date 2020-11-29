import React from 'react';
import AddRecipeForm from './AddRecipeForm';

// example of a stateless functional component
// const Recipes = (props) => {
//   return(
//     <div className="recipe">
//       <h1>{props.heading}</h1>
//     </div>
//   )
// }

class Recipes extends React.Component{
  render(){
    return(
      <div className="recipe">
        <h1>{this.props.heading}</h1>
        <AddRecipeForm addRecipe={this.props.addRecipe}></AddRecipeForm>
      </div>
    )
  }
}

export default Recipes;