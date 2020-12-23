import React from 'react';

class Recipe extends React.Component{
  handleClick = () => {
    this.props.addToMealPlan(this.props.index);
  }
  render(){
    const name = this.props.details.name;
    const image = this.props.details.image;
    const instructions = this.props.details.instructions;
    const ingredients = this.props.details.ingredients;
    // const ingredients = Object.keys(this.props.details.ingrdients);

    return(
      <div className="recipe-wrapper">
        <h2 className="recipe-name">{name}</h2>
        <img src={image} alt={name}/>
        <h4>Ingredients</h4>
        <p className="ingredients-list">{ingredients.map((ingredient) => <li>{ingredient}</li>)}</p>
        <h4>Instructions</h4>
        <p className="instructions">{instructions}</p>
        <button onClick={this.handleClick}>Add to Meal Plan</button>
      </div>
    )
  }
}

export default Recipe;