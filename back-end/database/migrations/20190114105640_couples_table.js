
exports.up = function(knex, Promise) {
  return knex.schema.createTable('couples', (tbl)=>{
      tbl.increments();
      tbl.integer('bride')
      .unsigned()
      .references('users.id')
      tbl.integer('groom')
      .unsigned()
      .references('users.id')
      tbl.string('phonenumber')
      tbl.string('password')
      tbl.boolean('permission-email')
      tbl.boolean('permission-textmsg')
      tbl.integer('designtemplate')
      tbl.boolean('dashboardaccess')
      tbl.date('eventdate')
      tbl.string('eventaddress')
  
    })
  };


exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('couples')
  };


