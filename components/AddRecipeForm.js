import React from 'react';
import FileUploader from "react-firebase-file-uploader";
import firebase from 'firebase';

class AddRecipeForm extends React.Component{
  nameRef = React.createRef();
  imageRef = React.createRef();
  ingredientsRef = React.createRef();
  instructionsRef = React.createRef();
  imageUploadRef = React.createRef();

  // handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  // handleProgress = progress => this.setState({ progress });
  // handleUploadError = error => {
  //   this.setState({ isUploading: false });
  //   console.error(error);
  // };
  // handleUploadSuccess = filename => {
  //   this.setState({ avatar: filename, progress: 100, isUploading: false });
  //   firebase
  //     .storage()
  //     .ref("images")
  //     .child(filename)
  //     .getDownloadURL()
  //     .then(url => this.setState({ avatarURL: url }));
  //     console.log('test2');
  // };
 
  addRecipe = (e) => {
    e.preventDefault();

    const recipe ={
      name: this.nameRef.current.value,
      image: this.imageRef.current.value,
      // image: storageRef.child('images/Sheet-Pan-Salmon-1.jpg').getDownloadURL(),
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
          {/* <input type="file" ref={this.imageUploadRef} />  */}
          {/* <form> */}
            {/* {this.state.isUploading && <p>Progress: {this.state.progress}</p>} */}
          <FileUploader
            accept="image/*"
            name="recipeImage"
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
          {/* </form> */}
          <input name="image" ref={this.imageRef} type="text" placeholder="Image"></input>
          <textarea name="ingredients" ref={this.ingredientsRef} placeholder="Ingredients"></textarea>
          <textarea name="instructions" ref={this.instructionsRef} placeholder="Instructions"></textarea>
          <button onClick={() => this.setState({popupactive: !this.state.popupactive})} type="submit">Add Recipe</button>
        </form>
      </section>
    )
  }
}

export default AddRecipeForm;