import React from 'react';
import Recipes from './Recipes';
import GroceryList from './GroceryList';
import Ingredients from './ingredients';
import Instructions from './Instructions'; 
import Search from './Search';

class App extends React.Component{
  render(){
    return(
      <div className="react-wrapper">
        <Search></Search>
        <Recipes heading="Choose a recipe!"></Recipes>
        <GroceryList></GroceryList>
        <Ingredients></Ingredients>
        <Instructions></Instructions>
      </div>
    )
  }
}

export default App;