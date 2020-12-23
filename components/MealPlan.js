import React from 'react';

class MealPlan extends React.Component{
  renderMealPlan = (key) => {
    const mealPlanItem = this.props.recipes[key];
    const count = this.props.mealplan[key];

    return <li key={key}>{count} - {mealPlanItem.name}</li>;
  }
  render(){
    const mealPlanIds = Object.keys(this.props.mealplan);
    
    // const mealTotal = mealPlanIds.reduce((prevTotal, key) => {
    //   const count = this.props.mealplan[key];
    //   return prevTotal+count;
    // }, 0);

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