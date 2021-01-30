import React from 'react';

class GroceryList extends React.Component{
  renderGroceryList = (key) => {
    const mealPlanItem = this.props.recipes[key];
    // Check to see if a mealPlanItem exists.
    if(!mealPlanItem) return null;
    const count = this.props.mealplan[key];
    const mealPlanIngredient = mealPlanItem.ingredients.map((mealPlanIngredient) => <li key={key}>{count} - {mealPlanIngredient}</li>);

    return mealPlanIngredient;
  }
  render(){
    const mealPlanIds = Object.keys(this.props.mealplan);

    return(
      <div className="grovery-list-wrapper">
        <div className="grocery-list-item">
          <h1>Grocery List</h1>
          <ul>
            {mealPlanIds.map(this.renderGroceryList)}
          </ul>
        </div>
      </div>
    )
  }
}

export default GroceryList;