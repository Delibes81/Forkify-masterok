import * as model from "../js/model.js";
import recipeView from './views/RecipeView.js';


async function controlRecipes() {
  try {
    
    
    let id = window.location.hash;
    id = id.slice(1);
    if (!id) return;

    recipeView.renderSpinner();
    
    console.log(id);
    
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
    
  } 
  catch (error) {
    recipeView.renderError();
  }
}

function init() {
  recipeView.addHandlerRender(controlRecipes);
}

init();









// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
