import React from 'react';
import Recipes from './Recipes';
import Search from './Search';
import currentRecipes from '../current-recipes';
import Recipe from './Recipe';
import MealPlan from './MealPlan';
import GroceryList from './GroceryList';
import base from '../base';

class App extends React.Component{

  state = {
    recipes: {},
    mealplan: {},
    grocerylist: {}
  };

  componentDidMount(){
    const localStorageRef = localStorage.getItem(this.props.match.params.recipeBookId);
    const localStorageIngredientsRef = localStorage.getItem(this.props.match.params.recipeBookId);
    console.log(localStorageIngredientsRef)
    // const localStorageIngredientsRefRef = localStorage
    // Checks to see if the local storage has any info for mealplan.
    if(localStorageRef){
      // Sets the state of mealplan to the info in local storage.
      this.setState({
        mealplan: JSON.parse(localStorageRef)
      });
      // this.setState({
      //   grocerylist: JSON.parse(localStorageIngredientsRef)
      // });
    }

    // const localStorageIngredientsRef = localStorage.getItem(this.props.match.params.recipeBookId);

    // this.setState({
    //   grocerylist: JSON.parse(localStorageIngredientsRef);
    // });

    // this ref is different than an input ref
    this.ref = base.syncState(`${this.props.match.params.recipeBookId}`, {
      context: this,
      state: 'recipes'
    });

    this.ref = base.syncState(`${this.props.match.params.recipeBookId}`, {
      context: this,
      state: 'grocerylist'
    });
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

  addToGroceryList = (key) => {
    const grocerylist = {...this.state.grocerylist};

    grocerylist[key] = grocerylist[key];

    this.setState({
      grocerylist: grocerylist
    })
  }

  // addToGroceryList = (ingredients) => {
  //   const grocerylist = {...this.state.grocerylist};

  //   grocerylist[`ingredientsList${Date.now()}`] = ingredients;

  //   this.setState({
  //     grocerylist: grocerylist
  //   })
  // }

  addToMealPlan = (key) => {
    const mealplan = {...this.state.mealplan};
    mealplan[key] = mealplan[key] + 1 || 1;
    // The mealplan key is 1?
    this.setState({
      mealplan: mealplan
    })
  }

  // addItems = (ingredients) => {
  //   const grocerylist = {...this.state.grocerylist};

  //   grocerylist[key] = grocerylist[key];

  //   this.setState({
  //     grocerylist: grocerylist;
  //   })

  // }

  

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

  render(){
    return(
      <div className="react-wrapper">
        <div className="search-wrapper">
          <Search></Search>
        </div>
        <section className="recipes-section">
          <Recipes loadCurrentRecipes={this.loadCurrentRecipes} addRecipe={this.addRecipe} heading="Choose a recipe!"></Recipes>

          {Object.keys(this.state.recipes).map(recipe => 
            <Recipe addToGroceryList={this.addToGroceryList} key={recipe} index={recipe} addToMealPlan={this.addToMealPlan} details={this.state.recipes[recipe]}></Recipe>
          )}

        </section>
        <section className="meal-plan-section">
          {/* to pass the state we could also do {...this.state} which would pass the full state */}
          
          <MealPlan grocerylist={this.grocerylist} removeFromMealPlan={this.removeFromMealPlan} myURL={this.props.match.params.recipeBookId} recipes={this.state.recipes} mealplan={this.state.mealplan}></MealPlan>

        </section>
        <section className="grocery-list-section">
          {/* {Object.keys(this.state.grocerylist).map(ingredient => <GroceryList ingredient={ingredient.split(',')} recipes={this.state.recipes} mealplan={this.state.mealplan}></GroceryList>)} */}
          {Object.keys(this.state.grocerylist).map(ingredients => 
            <GroceryList addToGroceryList={this.addToGroceryList} key={ingredients} index={ingredients} details={this.state.grocerylist[ingredients]}></GroceryList>
          )}
        </section>
      </div>
    )
  }
}

export default App;