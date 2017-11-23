'use strict';

const Schema = use('Schema');

class DealsTableSchema extends Schema {

  up() {
    this.create('deals', (table) => {
      table.increments();
      table.string('title');
      table.text('keyword');
      table.string('maxprice');
      table.integer('user_id').references('users.id');
      table.timestamps();
    });
  }

  down() {
    this.drop('deals');
  }

}

module.exports = DealsTableSchema;
