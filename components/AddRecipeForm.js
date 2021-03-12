import React from 'react';

class AddRecipeForm extends React.Component{
  nameRef = React.createRef();
  imageRef = React.createRef();
  ingredientsRef = React.createRef();
  instructionsRef = React.createRef();
  imageUploadRef = React.createRef();

  addRecipe = (e) => {
    e.preventDefault();
    const recipe ={
      name: this.nameRef.current.value,
      image: this.imageRef.current.value,
      imageUpload: this.imageUploadRef.current.value,
      ingredients: this.ingredientsRef.current.value.split(","),
      groceryListItems: this.ingredientsRef.current.value.split(","),
      instructions: this.instructionsRef.current.value.split(",")
    }
    this.props.addRecipe(recipe);
    // refresh the form
    e.currentTarget.reset();
  };
  
  render(){
    return(
      <section className="add-recipe-wrapper">
        <form action="" onSubmit={this.addRecipe}>
          <input name="name" ref={this.nameRef} type="text" placeholder="Name"></input>
          <input name="image" ref={this.imageRef} type="text" placeholder="Image"></input>
          <input type="file" ref={this.imageUploadRef} /> 
          <textarea name="ingredients" ref={this.ingredientsRef} placeholder="Ingredients"></textarea>
          <textarea name="instructions" ref={this.instructionsRef} placeholder="Instructions"></textarea>
          <button onClick={() => this.setState({popupactive: !this.state.popupactive})} type="submit">Add Recipe</button>
        </form>
      </section>
    )
  }
}

export default AddRecipeForm;