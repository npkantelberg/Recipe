import React from 'react';

class MealPlan extends React.Component{

  renderMealPlan = (key) => {
    const mealPlanItem = this.props.recipes[key];
    const count = this.props.mealplan[key];

    // Checks to see if a mealPlanItem exists.
    if(!mealPlanItem) return null;
    // const mealPlanIngredient = mealPlanItem.ingredients.map((mealPlanIngredient) => <li key={key}>{count} - {mealPlanIngredient}</li>);

    return (
      <li key={key}>
        <span>{count} - {mealPlanItem.name}</span>
        <button className="remove-meal" onClick={() => {this.props.removeFromMealPlan(key)}}>Remove Meal</button>
        {/* {console.log(this.props.mealplan)}
        {console.log(this.props.recipes.ingredients)} */}
        <ul>
          {/* <li>{mealPlanIngredient}</li> */}
        </ul>
      </li>
    );
  }
  render(){
    const mealPlanIds = Object.keys(this.props.mealplan);
    
    return(
      <div className="meal-plan-wrapper">
        <h1>Meal Plan</h1>
        <ul>
          {mealPlanIds.map(this.renderMealPlan)}
        </ul>
      </div>
    )
  }
}

export default MealPlan;