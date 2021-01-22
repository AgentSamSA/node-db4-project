
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('recipe_id');
            tbl.string('recipe_name').notNullable();
        })
        .createTable('units', tbl => {
            tbl.increments('unit_id');
            tbl.string('unit').notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments('ingredient_id');
            tbl.string('ingredient_name').notNullable().unique();
        })
        .createTable('recipe_ingredients', tbl => {
            tbl.increments('recipe_ingredient_id');
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('RESTRICT');
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('RESTRICT');
            tbl.integer('quantity').unsigned().notNullable();
            tbl.integer('unit_id')
                .unsigned()
                .notNullable()
                .references('unit_id')
                .inTable('units')
                .onDelete('RESTRICT');
        })
        .createTable('recipe_steps', tbl => {
            tbl.increments('recipe_step_id');
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipe')
                .onDelete('RESTRICT');
            tbl.integer('step_number').unsigned().notNullable();
            tbl.string('instructions').notNullable();
        })
        .createTable('step_ingredients', tbl => {
            tbl.increments('step_ingredient_id');
            tbl.integer('recipe_step_id')
                .unsigned()
                .notNullable()
                .references('recipe_step_id')
                .inTable('recipe_steps')
                .onDelete('RESTRICT');
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('RESTRICT');
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('recipe_steps')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('units')
        .dropTableIfExists('recipes');
};
