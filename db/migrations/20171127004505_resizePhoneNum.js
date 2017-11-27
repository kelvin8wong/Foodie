/*  Increase the size of the phone field to max 24 */
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.raw('ALTER TABLE restaurants ALTER COLUMN phone TYPE VARCHAR(24)')
  ]);
}
exports.down = function(knex, Promise) {
  return Promise.all([
    knex.raw('ALTER TABLE restaurants ALTER COLUMN phone TYPE VARCHAR(12)')
  ]);
}