
exports.seed = function (knex, Promise) {
  return knex('recipes').insert([
    { recipe_name: 'Egg Fried Rice' },
    { recipe_name: 'Cheese Quesadilla' }
  ]);
};