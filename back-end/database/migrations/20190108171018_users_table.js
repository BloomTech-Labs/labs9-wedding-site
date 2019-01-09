
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (tbl)=>{
    tbl.increments();
    tbl.string('firstName').notNullable()
    tbl.string('lastName').notNullable()
    

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
