
exports.up = function(knex, Promise) {
    return knex.schema.createTable('oauth_ids', function(tbl) {
        tbl.increments();

        tbl.string('oauth_id');

        tbl.integer('user_id').unsigned().notNullable().references('id').inTable('users');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('oauth_ids');
};