
exports.up = function(knex, Promise) {
    return knex.schema.createTable('weddings', function(tbl) {
        tbl.increments();

        tbl.string('event_date');

        tbl.string('event_address');

        tbl.integer('design_template');
    });

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('weddings');
};
