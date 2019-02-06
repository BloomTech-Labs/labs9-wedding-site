
exports.up = function(knex, Promise) {
    return knex.schema.table('weddings', function(tbl) {
        tbl.integer('pricing_package').defaultTo(0);
    });

};

exports.down = function(knex, Promise) {
    return knex.schema.table('weddings').dropColumn('pricing_package');
};