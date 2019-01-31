exports.up = function(knex, Promise) {
    return knex.schema.table('oauth_ids', function(tbl) {
        tbl.dropColumn('user_id')

         });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('ouath_ids', function(tbl){
        tbl.integer('user_id').references('id').inTable('user');
    });
};