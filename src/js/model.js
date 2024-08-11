import { API_URL } from '../js/config.js';
import { getJSON } from './helpers.js';
import { RES_PER_PAGE } from '../js/config.js';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
};

export async function loadRecipe(id) {
  try{

    const data = await getJSON(`${API_URL}${id}`);
    console.log(data, "data");

    const recipe = {
      id: data.data.recipe.id,
      title: data.data.recipe.title,
      publisher: data.data.recipe.publisher,
      sourceUrl: data.data.recipe.source_url,
      image: data.data.recipe.image_url,
      servings: data.data.recipe.servings,
      cookTime: data.data.recipe.cooking_time,
      ingredients: data.data.recipe.ingredients,
    };

    state.recipe = recipe;
    console.log(state.recipe);
    
  } catch (err) {
    throw err;
  }
}

export async function loadSearchResults(query) {
  try {

    state.search.query = query;
    
    const data = await getJSON(`${API_URL}/?search=${query}`);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
      
    });


  } catch (err) {
    console.log(`${err} 💥💥💥💥`);
    throw err;
  }
}

export function getSearchResultsPage(page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
}
