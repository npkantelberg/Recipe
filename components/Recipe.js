import React from 'react';

class Recipe extends React.Component{
  handleClick = () => {
    this.props.addToMealPlan(this.props.index);
  }

  startEdit = () => {
    $(this).parents('.recipe-wrapper').find('.recipe-input').toggleClass('show');
    console.log($(this).text());
  }

  handleChange = (e) => {
    const updatedRecipe = {
      ...this.props.details,
      [e.currentTarget.name]: e.currentTarget.value
    };
    // const name = this.props.details.name;

    console.log(this.props.details.instructions); 

    console.log(updatedRecipe);

    this.props.updateRecipe(this.props.index, updatedRecipe);

    
  }

  render(){
    const name = this.props.details.name;
    const image = this.props.details.image;
    const instructions = this.props.details.instructions;
    const ingredients = this.props.details.ingredients;

    return(
      <div className="recipe-wrapper">
        <h2 className="recipe-name">{name}</h2>
        <input className="recipe-input" type="text" name="name" onChange={this.handleChange} value={name}/>
        <img src={image} alt={name}/>
        <h4>Ingredients</h4>
        <div className="ingredients-list">{ingredients.map((ingredient) => <input name="ingredients" onChange={this.handleChange} key={ingredient} value={ingredient}></input>)}</div>
        <h4>Instructions</h4>
        <div className="instructions"><textarea onChange={this.handleChange} name="instructions" rows="20" value={instructions}></textarea></div>
        <button onClick={this.handleClick}>Add to Meal Plan</button>
        <button onClick={() => {this.props.deleteRecipe(this.props.index)}}>Remove</button>
        <button onClick={this.startEdit} className="edit-recipe">Edit</button>
      </div>
    )
  }
}

export default Recipe;