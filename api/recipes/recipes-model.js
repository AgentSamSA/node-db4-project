const db = require("../../data/db-config");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('recipe_ingredients as ri')
        .join('ingredients as i', 'ri.ingredients_id', 'i.ingredients_id')
        .select('ingredient_name', 'quantity')
        .where('recipe_id', id);
}

function getInstructions(id) {
    return db('recipes as r')
        .join('recipe_steps as rs', 'r.recipe_id', 'rs.recipe_id')
        .select('recipe_name', 'step_number', 'instructions')
        .where('rs.recipe_id', id)
        .orderBy('step_number');
}