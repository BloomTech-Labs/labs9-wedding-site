
exports.up = function(knex, Promise) {
    return knex.schema.createTable('couples', function(tbl) {
        tbl.increments();

        tbl.integer('user_id').unsigned().notNullable().references('id').inTable('user');

        tbl.string('bride_groom');

        tbl.boolean('email_permission');

        tbl.boolean('text_permission');

        tbl.boolean('dashboard_access');

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('couples');
};