import React from 'react';

class Recipe extends React.Component{

  state = { active: false }

  handleClick = () => {
    this.props.addToMealPlan(this.props.index);
  }

  handleIngredientChange = (e) => {
    const updatedRecipe = {
      ...this.props.details,
      [e.currentTarget.name]: e.currentTarget.value.split(',')
    };

    this.props.updateRecipe(this.props.index, updatedRecipe);
  }

  handleChange = (e) => {
    const updatedRecipe = {
      ...this.props.details,
      [e.currentTarget.name]: e.currentTarget.value
    };

    this.props.updateRecipe(this.props.index, updatedRecipe);
  }

  render(){
    const name = this.props.details.name;
    const image = this.props.details.image;
    const instructions = this.props.details.instructions;
    const ingredients = this.props.details.ingredients;

    return(
      <div className="recipe-wrapper">
        <h2 readOnly readonlyswitch={this.state.active && 'active'} className="recipe-read-only recipe-name">{name}</h2>
        <input className="input-switch recipe-input recipe-input-h2" inputswitch={this.state.active && 'active'} type="text" name="name" onChange={this.handleChange} value={name}/>
        <img src={image} alt={name}/>   
        <h4>Ingredients</h4>
        
        <div readOnly readonlyswitch={this.state.active && 'active'} className="recipe-read-only ingredients-list">
          <ul>
            {ingredients.map((ingredient) => <li name="ingredients" onChange={this.
        handleChange} key={ingredient}>{ingredient}</li>)}
          </ul>
        </div>
        
        <div inputswitch={this.state.active && 'active'} className="input-switch recipe-input ingredients-list">
          <textarea rows="20" name="ingredients" onChange={this.
        handleIngredientChange} value={ingredients}>
          </textarea>
        </div>

        <h4>Instructions</h4>
        
        <div readOnly readonlyswitch={this.state.active && 'active'} className="recipe-read-only recipe-input instructions"><div  name="instructions">{instructions}</div></div>
        <div inputswitch={this.state.active && 'active'} className="input-switch recipe-input instructions"><textarea onChange={this.handleChange} name="instructions" rows="20" value={instructions}></textarea></div>
        
        <button onClick={this.handleClick}>Add to Meal Plan</button>
        
        <button onClick={() => {this.props.deleteRecipe(this.props.index)}}>Remove</button>
        
        <button inputswitch={this.state.active && 'active'} onClick={() => this.setState({active: !this.state.active})} className="edit-recipe">Edit</button>

        <button inputswitch={this.state.active && 'active'} onClick={() => this.setState({active: !this.state.active})} className="input-swtich done-edit-recipe">Done</button>
      </div>
    )
  }
}

export default Recipe;