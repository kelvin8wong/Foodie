
exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.createTable('members', (t) =>  {
      t.string('member', 16);
      t.primary('member');
      t.string('nameFirst', 64);
      t.string('nameLast', 64);
      t.varchar('email');
      t.string('password', 256).notNullable();
      t.boolean('goodForKids').defaultTo(false);
      t.boolean('takeOut').defaultTo(false);
      t.boolean('hotNew').defaultTo(false);
      t.boolean('hasParking').defaultTo(false);
      t.boolean('serveAlcohol').defaultTo(false);
      t.boolean('reservReq').defaultTo(false)
    }),
    knex.schema.createTable('restaurants', (t) =>  {
      t.varchar('restID').notNullable();
      t.primary('restID');
      t.varchar('url');
      t.varchar('imageUrl');
      t.int('rating');
      t.string('phone', 12);
      t.float('coordLong', 19, 15);
      t.float('coordLat', 19, 15);
      t.string('city', 32);
      t.string('country', 24);
      t.varchar('addr2');
      t.varchar('addr3');
      t.string('state', 24);
      t.varchar('addr1');
      t.string('zipCode', 16)
    }),
knex.schema.createTable('membSels', (t) =>  {
      t.string('memberID', 16);
      t.foreign('memberID').references('members.member');
      t.varchar('memberRest');
      t.foreign('memberRest').references('restaurants.restID');
      t.primary(['memberID', 'memberRest']);
      t.varchar('comments')
    })
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('membSels'),
    knex.schema.dropTableIfExists('restaurants'),
    knex.schema.dropTableIfExists('members'),
  ])
};
