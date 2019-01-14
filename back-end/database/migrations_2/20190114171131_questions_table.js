
exports.up = function(knex, Promise) {
    return knex.schema.createTable('questions', function(tbl) {
        tbl.increments();

        tbl.integer('wedding_id').unsigned().notNullable().references('weddings.id');
        
        tbl.string('category');

        tbl.string('question');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('questions');
};
