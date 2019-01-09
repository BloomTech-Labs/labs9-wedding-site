

exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (tbl)=>{
      tbl.increments();
      tbl.string('firstname').notNullable()
      tbl.string('lastname').notNullable()
      
  
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
  };