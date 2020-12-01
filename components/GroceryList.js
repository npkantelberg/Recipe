import React from 'react';
import Ingredients from './Ingredients';

class GroceryList extends React.Component{
  render(){
    return(
      <div className="grocery-list-item">
        <Ingredients></Ingredients>
      </div>
    )
  }
}

export default GroceryList;