import * as model from "../js/model.js";
import recipeView from './views/RecipeView.js';
import searchView from './views/searchViews';


async function controlRecipes() {
  try {
    
    
    let id = window.location.hash;
    id = id.slice(1);
    if (!id) return;

    recipeView.renderSpinner();
    
    
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
    
  } 
  catch (error) {
    recipeView.renderError();
  }
}

async function controlSearchResults() {
  try { 
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    console.log(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
}

controlSearchResults();

function init() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

init();









// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
