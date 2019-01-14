
exports.up = function(knex, Promise) {
  return knex.schema.createTable('guests_', (tbl)=>{
      tbl.increments();
      tbl.integer('guest')
      .unsigned()
      .references('users.id')
      tbl.string('attending')
      tbl.integer('linkedcouple')
      .unsigned()
      .references('couples.id')
      tbl.string('relatedspouse') //This refers to which spouse the guest knows (bride, groom, or both)
      
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('guests_')
};

