import React from 'react';

class GroceryList extends React.Component{

  renderGroceryList = (key) => {    

    const groceryListItem = this.props.details[key];

    // Check to see if a mealPlanItem exists.
    if(!groceryListItem) return null;
    
    <div>{groceryListItem}</div>

    const groceryListIngredient = groceryListItem.groceryListItems.map((groceryListIngredient) => 
    <li key={groceryListIngredient}>
      <span>{groceryListIngredient}</span>
      <button onClick={() => {this.props.removeGroceryListItem(this.props.details[key], groceryListIngredient)}}>
        Remove Item
      </button>
    </li>);

    return groceryListIngredient;
  }
  render(){
    const groceryListIds = Object.keys(this.props.mealplan);
    
    return(
      <div className="recipe-wrapper">
        <ul>
        {groceryListIds.map(this.renderGroceryList)}
        </ul>
      </div>
    )
  }
}

export default GroceryList;