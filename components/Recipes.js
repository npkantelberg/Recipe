import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import firebase from 'firebase';

class Recipes extends React.Component{
  render(){
    return(
      <div className="recipe">
        <h1>{this.props.heading}</h1>
        <AddRecipeForm
          addRecipe={this.props.addRecipe}
          accept="image/*"
          name="recipeImage"
          storageRef={firebase.storage().ref("images")}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
          ></AddRecipeForm>
        <button onClick={this.props.loadCurrentRecipes}>Load Current Recipes</button>
      </div>
    )
  }
}

export default Recipes;