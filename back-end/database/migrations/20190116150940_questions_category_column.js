
exports.up = function(knex, Promise) {
    return knex.schema.table('questions', function(tbl) {
        tbl.string('category');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('questions').dropColumn('category');
};
