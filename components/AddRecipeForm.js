import React from 'react';

class AddRecipeForm extends React.Component{
  nameRef = React.createRef();
  imageRef = React.createRef();
  ingredientsRef = React.createRef();
  instructionsRef = React.createRef();

  addRecipe = (e) => {
    e.preventDefault();

    // const nameValue = this.nameRef.current.value;
    // const imageValue = this.nameRef.current.value;
    // const ingredientsValue = this.ingredientsRef.current.value;
    // const instructionsValue = this.instructionsRef.current.value

    // console.log('Name: ' + nameValue + ' Image: ' + imageValue + ' Ingredients: ' + ingredientsValue + ' Instructions: ' + instructionsValue);

    const recipe ={
      name: this.nameRef.current.value,
      image: this.nameRef.current.value,
      ingredients: this.ingredientsRef.current.value,
      instructions: this.instructionsRef.current.value
    }
    console.log(recipe);
    this.props.addRecipe(recipe);
    // refresh the form
    e.currentTarget.reset();
  };

  render(){
    return(
      <form action="" onSubmit={this.addRecipe}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name"></input>
        <input name="image" ref={this.imageRef} type="text" placeholder="Image"></input>
        <textarea name="ingredients" ref={this.ingredientsRef} placeholder="Ingredients"></textarea>
        <textarea name="instructions" ref={this.instructionsRef} placeholder="Instructions"></textarea>
        <button type="submit">Add Recipe</button>
      </form>
    )
  }
}

export default AddRecipeForm;