import React from 'react';

class Recipe extends React.Component{
  render(){
    const name = this.props.details.name;
    const image = this.props.details.image;
    const instructions = this.props.details.instructions;
    const ingredients = this.props.details.ingredients;

    return(
      <div className="recipe-wrapper">
        <h2 className="recipe-name">{name}</h2>
        <img src={image} alt={name}/>
        <h4>Ingredients</h4>
        <p className="ingredients-list">{ingredients}</p>
        <h4>Instructions</h4>
        <p className="instructions">{instructions}</p>
      </div>
    )
  }
}

export default Recipe;