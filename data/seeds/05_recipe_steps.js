
exports.seed = function (knex, Promise) {
  return knex('recipe_steps').insert([
    {
      recipe_id: 1,
      step_number: 1,
      instructions: 'Heat oil in pan.'
    },
    {
      recipe_id: 1,
      step_number: 2,
      instructions: 'Crack eggs into pan, scramble for two minutes.'
    },
    {
      recipe_id: 1,
      step_number: 3,
      instructions: 'Add salt.'
    },
    {
      recipe_id: 1,
      step_number: 4,
      instructions: 'Mix the cooked eggs with rice, cook for another two minutes, then move to plate.'
    },
    {
      recipe_id: 2,
      step_number: 1,
      instructions: 'Heat oil in pan.'
    },
    {
      recipe_id: 2,
      step_number: 2,
      instructions: 'Place first tortilla in pan, layer with cheese.'
    },
    {
      recipe_id: 2,
      step_number: 3,
      instructions: 'Place second tortilla on top, flip to cook and melt cheese evenly.'
    }
  ]);
};
