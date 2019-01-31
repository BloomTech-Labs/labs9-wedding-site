
exports.up = function(knex, Promise) {
    return knex.schema.createTable('registry', function(tbl) {
        tbl.increments();

        tbl.integer('wedding_id').unsigned().notNullable().references('weddings.id');

        tbl.string('link');

        tbl.string('name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('registry');
};
