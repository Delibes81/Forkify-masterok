import * as model from "../js/model.js";
import recipeView from './views/RecipeView.js';



const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};



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
    alert(error);
  }
}

window.addEventListener('hashchange', controlRecipes);
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));









// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
