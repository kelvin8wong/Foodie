/*  Increase the size of the comments field to max 2024 */
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.raw('ALTER TABLE membsels ALTER COLUMN comments TYPE VARCHAR(2024)')
  ]);
}
exports.down = function(knex, Promise) {
  return Promise.all([
    knex.raw('ALTER TABLE membsels ALTER COLUMN comments TYPE VARCHAR(255)')
  ]);
}