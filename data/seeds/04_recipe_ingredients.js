
exports.seed = function (knex, Promise) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 2, unit_id: 1 },
    { recipe_id: 1, ingredient_id: 2, quantity: 2 },
    { recipe_id: 1, ingredient_id: 3, quantity: 1, unit_id: 3 },
    { recipe_id: 1, ingredient_id: 4, quantity: 3, unit_id: 2 },
    { recipe_id: 2, ingredient_id: 4, quantity: 2, unit_id: 2 },
    { recipe_id: 2, ingredient_id: 5, quantity: 2 },
    { recipe_id: 2, ingredient_id: 6, quantity: 1, unit_id: 1 }
  ]);
};
