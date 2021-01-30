import React from 'react';

class MealPlan extends React.Component{

  renderMealPlan = (key) => {
    const mealPlanItem = this.props.recipes[key];
    const count = this.props.mealplan[key];
    // Checks to see if a mealPlanItem exists.
    if(!mealPlanItem) return null;
    // console.table(mealPlanItem.ingredients);
    // console.log(this.props.myURL);

    return (
      <li key={key}>
        <span>{count} - {mealPlanItem.name}</span>
        <button className="remove-meal" onClick={() => {this.props.removeFromMealPlan(key)}}>Remove Meal</button>
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