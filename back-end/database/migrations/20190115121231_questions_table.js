
exports.up = function(knex, Promise) {
    return knex.schema.createTable('questions', function(tbl) {
        tbl.increments();

        tbl.integer('wedding_id').unsigned().notNullable().references('weddings.id');
        
        tbl.boolean('multiple_choice');

        tbl.string('question');

        tbl.text('answer');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('questions');
};
