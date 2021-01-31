import React from 'react';

class GroceryList extends React.Component{
  // renderGroceryList = (key) => {
  //   const mealPlanItem = this.props.recipes[key];
  //   // Check to see if a mealPlanItem exists.
  //   if(!mealPlanItem) return null;
  //   const count = this.props.mealplan[key];
  //   const mealPlanIngredient = mealPlanItem.ingredients.map((mealPlanIngredient) => <li key={key}>{count} - {mealPlanIngredient}</li>);

  //   return mealPlanIngredient;
  // }
  // render(){
  //   const mealPlanIds = Object.keys(this.props.mealplan);

  //   return(
  //     <div className="grovery-list-wrapper">
  //       <div className="grocery-list-item">
  //         <h1>Grocery List</h1>
  //         <ul>
  //           {mealPlanIds.map(this.renderGroceryList)}
  //           {/* Ingredient: {this.props.grocerylist} */}
  //         </ul>
  //       </div>
  //     </div>
  //   )
  // }

  // handleClick = () => {
    
  //   this.props.addToMealPlan(this.props.index);
  //   // this.props.addToGroceryList(this.props.index);
  //   const ingredients = this.props.details.ingredients;

  //   this.props.addToGroceryList(this.props.index);
  //   console.log(ingredients);
  // }
  render(){
    const groceryListItems = this.props.details.groceryListItems
    // const ingredients = Object.keys(this.props.details.ingrdients);

    return(
      <div className="recipe-wrapper">
        <p className="ingredients-list">{groceryListItems.map((groceryListItem) => <li>{groceryListItem}</li>)}</p>
      </div>
    )
  }
}

export default GroceryList;