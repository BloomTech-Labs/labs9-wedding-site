
exports.up = function(knex, Promise) {
    return knex.schema.createTable('guests', function(tbl) {
        tbl.increments();

        tbl.integer('user_id').unsigned().notNullable().references('id').inTable('users');

        tbl.string('attending');

        tbl.string('related_spouse');


    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('guests');
};

