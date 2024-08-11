import * as model from "../js/model.js";
import recipeView from './views/RecipeView.js';
import searchView from './views/searchViews';
import resultsView from "./views/ResultsView.js";
import paginationView from './views/paginationviews.js';


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
    resultsView.renderSpinner();
    await model.loadSearchResults(query);
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
    console.log(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
}
function controlPagination(goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
}
controlSearchResults();

function init() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
}

init();









// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
