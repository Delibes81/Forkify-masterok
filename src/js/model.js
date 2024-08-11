
export const state = {
  recipe: {}
};

export async function loadRecipe(id) {
  try{
    const resp = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
    if (!resp.ok) throw new Error(`Recipe not found (${resp.status})`);
    const data = await resp.json();
    console.log(resp, "resp");

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
    alert(err);
    throw err;
  }
}