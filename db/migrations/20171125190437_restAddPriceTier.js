/* Changed the schema of the restaurants file:
    add: restaurant name, price tier
    chg rating column to a float 3,1   */

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.raw('ALTER TABLE restaurants ALTER COLUMN rating TYPE DECIMAL(3, 1)'),
    knex.schema.table('restaurants', (t) => {
     // const column = t.float('rating', 3, 1);
    //  console.log(column);
      //t.float('rating', 3, 1).nullable().alter();
      t.varchar('restname');
      t.integer('pricetier');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.raw('ALTER TABLE restaurants ALTER COLUMN rating TYPE INTEGER'),
    knex.schema.table('restaurants', (t) => {
      t.dropColumn('restname');
      t.dropColumn('pricetier');
    })
  ])
};
