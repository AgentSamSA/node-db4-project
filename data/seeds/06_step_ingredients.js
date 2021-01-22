
exports.seed = function (knex, Promise) {
  return knex('step_ingredients').insert([
    { recipe_step_id: 1, ingredient_id: 4 },
    { recipe_step_id: 2, ingredient_id: 2 },
    { recipe_step_id: 3, ingredient_id: 3 },
    { recipe_step_id: 4, ingredient_id: 1 },
    { recipe_step_id: 4, ingredient_id: 2 },
    { recipe_step_id: 5, ingredient_id: 4 },
    { recipe_step_id: 6, ingredient_id: 5 },
    { recipe_step_id: 6, ingredient_id: 6 },
    { recipe_step_id: 7, ingredient_id: 5 }
  ]);
};
