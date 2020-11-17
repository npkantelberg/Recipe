import React from 'react';
import Recipes from './Recipes';
import GroceryList from './GroceryList';
import Ingredients from './ingredients';
import Instructions from './Instructions'; 

class App extends React.Component{
  render(){
    return(
      <div className="react-wrapper">
        <Recipes heading="Choose a recipe!"></Recipes>
        <GroceryList></GroceryList>
        <Ingredients></Ingredients>
        <Instructions></Instructions>
      </div>
    )
  }
}

export default App;