
exports.seed = function (knex, Promise) {
  return knex('units').insert([
    { unit: 'cup' },
    { unit: 'oz' },
    { unit: 'tsp' },
    { unit: 'tbsp' }
  ]);
};
