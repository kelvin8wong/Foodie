
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('members', (t) =>  {
      t.string('member', 16);
      t.primary('member');
      t.string('nameFirst', 64);
      t.string('nameLast', 64);
      t.varchar('email');
      t.string('password', 16).notNullable()
    }),
    knex.schema.createTable('meals', (t) =>  {
      t.increments('id').unsigned().primary();
      t.varchar('restaurant');
      t.varchar('mealpic');
      t.string('mealName', 32);
      t.varchar('mealDesc');
      t.decimal('price', 5, 2).defaultTo(0);
      t.float('avgRating').defaultTo(0)
    }),
    knex.schema.createTable('reviews', (t) =>  {
      t.string('memberID', 16);
      t.foreign('memberID').references('members.member');
      t.integer('mealID');
      t.foreign('mealID').references('meals.id');
      t.primary(['memberID', 'mealID']);
      t.integer('rating');
      t.varchar('comments')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('members'),
    knex.schema.dropTableIfExists('meals'),
    knex.schema.dropTableIfExists('reviews')
  ])
};