
exports.up = function(knex, Promise) {
    return knex.schema.createTable('answers', function(tbl) {
        tbl.increments();

        tbl.integer('guest_id').unsigned().notNullable().references('guests.id');
        
        tbl.integer('question_id').unsigned().notNullable().references('questions.id');

        tbl.string('answer');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('answers');
};
