import React from 'react';

class MealPlan extends React.Component{

  renderMealPlan = (key) => {
    const mealPlanItem = this.props.recipes[key];
    const count = this.props.mealplan[key];

    // Checks to see if a mealPlanItem exists.
    if(!mealPlanItem) return null;

    return (
      <li key={key}>
        <span>{count} - {mealPlanItem.name}</span>
        <div className="button-row">
          <button className="button reset-ingredients" onClick={() => {this.props.resetIngredients(key)}}><i className="fas fa-undo"></i></button>
          <button className="button remove-meal remove-button" onClick={() => {this.props.removeFromMealPlan(key)}}></button>          
        </div>
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