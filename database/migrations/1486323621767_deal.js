'use strict'

const Schema = use('Schema')

class DealTableSchema extends Schema {

  up () {
    this.table('deal', (table) => {
      // alter deal table
    })
  }

  down () {
    this.table('deal', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = DealTableSchema
