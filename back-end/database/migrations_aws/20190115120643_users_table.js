
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', function(tbl) {
        tbl.increments();

        tbl.string('first_name');

        tbl.string('last_name');

        tbl.string('email');

        tbl.string('phone');

        tbl.string('address');

        tbl.integer('wedding_id').unsigned().notNullable().references('weddings.id');

        tbl.boolean('guest');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user');
};