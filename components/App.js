import React from 'react';
import Recipes from './Recipes';
import Search from './Search';
import currentRecipes from '../current-recipes';
import Recipe from './Recipe';
import MealPlan from './MealPlan';
import GroceryList from './GroceryList';
import base from '../base';
import firebase from 'firebase';
import FileUploader from "react-firebase-file-uploader";

class App extends React.Component{

  state = {
    recipes: {},
    mealplan: {},
    grocerylist: {},
    isUploading: false,
    progress: 0,
  };

  componentDidMount(){
    const localStorageRef = localStorage.getItem(this.props.match.params.recipeBookId);
    // Checks to see if the local storage has any info for mealplan.
    if(localStorageRef){
      // Sets the state of mealplan to the info in local storage.
      this.setState({
        mealplan: JSON.parse(localStorageRef)
      });
    }

    // this ref is different than an input ref
    this.ref = base.syncState(`${this.props.match.params.recipeBookId}`, {
      context: this,
      state: 'recipes'
    });

    // var storage = firebase.storage();
    // var storageRef = storage.ref();
    // var imageRef = storageRef.child('images/IMG_2488.jpg');
    // console.log(imageRef.fullPath);

  }

  componentDidUpdate(){
    localStorage.setItem(this.props.match.params.recipeBookId, JSON.stringify(this.state.mealplan));
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  loadCurrentRecipes = (e) => {
    this.setState({
      recipes: currentRecipes
    })
  }

  addRecipe = (recipe) => {
    const recipes = {...this.state.recipes};
    recipes[`recipe${Date.now()}`] = recipe;
    this.setState({
      recipes: recipes
    });
  }

  deleteRecipe = (key) => {
    const recipes = {...this.state.recipes};
    
    recipes[key] = null;

    this.setState({recipes: recipes});
  }

  updateRecipe = (key, updatedRecipe) => {
    const recipes = {...this.state.recipes};
    
    recipes[key] = updatedRecipe;

    this.setState({
      recipes: recipes
    });
  }

  removeGroceryListItem = (key, groceryListIngredient) => {
    const grocerylist = {...this.state.recipes} 

    key.groceryListItems.splice(key.groceryListItems.indexOf(groceryListIngredient), 1);

    this.setState({
      recipes: grocerylist
    })
  }

  resetIngredients = (key) => {
    const recipes = {...this.state.recipes}
    
    recipes[key].groceryListItems = recipes[key].ingredients;
    
    this.setState({
      recipes: recipes
    })
  }

  addToMealPlan = (key) => {
    const mealplan = {...this.state.mealplan};
    mealplan[key] = mealplan[key] + 1 || 1;
    // The mealplan key is 1?
    this.setState({
      mealplan: mealplan
    })
  }  

  removeFromMealPlan = key => {
    // Take a copy of the mealplan state
    const mealplan = {...this.state.mealplan};
    // Remove a meal from mealplan based on key
    delete mealplan[key];
    // Set the mealplan state
    this.setState({
      mealplan: mealplan
    })
  }

  removeGroceryListItem = (key, groceryListIngredient) => {
    const grocerylist = {...this.state.recipes} 

    key.groceryListItems.splice(key.groceryListItems.indexOf(groceryListIngredient), 1);
    console.log(grocerylist);

    this.setState({
      recipes: grocerylist
    })
  }



  render(){
    
    return(
      <div popupactive={this.state.popupactive && 'popupactive'} className="react-wrapper">

        {/* <div className="search-wrapper">
          <Search></Search>
        </div> */}
        
        
        <h1 className="heading-large">Choose A Recipe!</h1>
        <div popupactive={this.state.popupactive && 'popupactive'} className="add-recipe-section">
          <h1 className="heading-large">Add a recipe!</h1>
          <Recipes recipes={this.state.recipes} resetGroceryListItems={this.resetGroceryListItems} loadCurrentRecipes={this.loadCurrentRecipes} addRecipe={this.addRecipe}></Recipes>
          <div className="close-button-wrapper">
            <button className="button" popupactive={this.state.popupactive && 'popupactive'} onClick={() => this.setState({popupactive: !this.state.popupactive})}>Close</button>
          </div>
        </div>
        <section className="recipes-section main-sections large-section">
          <div className="recipe-wrap-outer">
            {Object.keys(this.state.recipes).map(recipe => 
              <Recipe resetIngredients={this.resetIngredients} addToGroceryList={this.addToGroceryList} key={recipe} index={recipe} addToMealPlan={this.addToMealPlan} updateRecipe={this.updateRecipe} deleteRecipe={this.deleteRecipe} details={this.state.recipes[recipe]}></Recipe>
            )}
          </div>
        </section>
        <section className="meal-plan-section main-sections smaller-section recipe-card">
          {/* to pass the state we could also do {...this.state} which would pass the full state */}
          <MealPlan grocerylist={this.grocerylist} removeFromMealPlan={this.removeFromMealPlan} resetIngredients={this.resetIngredients} myURL={this.props.match.params.recipeBookId} recipes={this.state.recipes} mealplan={this.state.mealplan}></MealPlan>

        </section>
        <section className="grocery-list-section main-sections smaller-section recipe-card">
          <h1>Grocery List</h1>
          <GroceryList updateRecipe={this.updateRecipe} resetGroceryListItems={this.resetGroceryListItems} removeGroceryListItem={this.removeGroceryListItem} mealplan={this.state.mealplan} details={this.state.recipes}></GroceryList>
        </section>
        <button className="popup-cta" onClick={() => this.setState({popupactive: !this.state.popupactive})}>Add New Recipe</button>
      </div>
    )
  }
}

export default App;