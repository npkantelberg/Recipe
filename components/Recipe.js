import React from 'react';

class Recipe extends React.Component{

  state = { active: false }

  handleClick = () => {
    this.props.addToMealPlan(this.props.index);
  }


  handleInstructionsChange = (e) => {
    const updatedRecipe = {
      ...this.props.details,
      [e.currentTarget.name]: e.currentTarget.value.split(',')
    };

    this.props.updateRecipe(this.props.index, updatedRecipe);
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
      <div className="recipe-wrapper recipe-card">
        <h1 readOnly readonlyswitch={this.state.active && 'active'} className="recipe-read-only recipe-name">{name}</h1>
        <div className="input-size-manager">
          <input className="input-switch recipe-input recipe-input-h2" inputswitch={this.state.active && 'active'} type="text" name="name" onChange={this.handleChange} value={name}/>
        </div>
        <img src={image} alt={name}/>   
        
        {/* Ingredients */}
        <h1>Ingredients</h1>
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
        {/* End Ingredients */}

        {/* Instructions */}
        <h1>Instructions</h1>
        <div readOnly readonlyswitch={this.state.active && 'active'} className="recipe-read-only instructions-list">
          <ul>
            {instructions.map((instruction) => <li name="instructions" onChange={this.
        handleChange} key={instruction}>{instruction}</li>)}
          </ul>
        </div>
        <div inputswitch={this.state.active && 'active'} className="input-switch recipe-input instructions-list">
          <textarea rows="20" name="instructions" onChange={this.
        handleInstructionsChange} value={instructions}>
          </textarea>
        </div>
        {/* End Instructions */}

        {/* <div readOnly readonlyswitch={this.state.active && 'active'} className="recipe-read-only recipe-input instructions"><div  name="instructions">{instructions}</div></div>
        <div inputswitch={this.state.active && 'active'} className="input-switch recipe-input instructions"><textarea onChange={this.handleChange} name="instructions" rows="20" value={instructions}></textarea></div> */}
        
        <div className="button-row">
          <button className="button" onClick={this.handleClick}>Add to Meal Plan</button>
          <button className="edit-recipe button" inputswitch={this.state.active && 'active'} onClick={() => this.setState({active: !this.state.active})}>Edit</button>
          <button className="button input-swtich done-edit-recipe" inputswitch={this.state.active && 'active'} onClick={() => this.setState({active: !this.state.active})}>Done</button>
          <button className="button" onClick={() => {this.props.deleteRecipe(this.props.index)}}>Remove</button>
        </div>
      </div>
    )
  }
}

export default Recipe;