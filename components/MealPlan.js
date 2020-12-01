import React from 'react';
import Recipes from './Recipes';

class MealPlan extends React.Component{
  render(){
    return(
      <div className="meal-plan-wrapper">
        <Recipes></Recipes>
      </div>
    )
  }
}

export default MealPlan;