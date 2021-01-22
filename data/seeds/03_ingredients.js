
exports.seed = function (knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: 'cooked white rice' },
    { ingredient_name: 'egg' },
    { ingredient_name: 'salt' },
    { ingredient_name: 'oil' },
    { ingredient_name: 'flour tortilla' },
    { ingredient_name: 'cheddar cheese' }
  ]);
};
