'use strict';

const Lucid = use('Lucid');

class Deal extends Lucid {

  user() {
    return this.belongsTo('App/Model/User', 'id', 'user_id');
  }

}

module.exports = Deal;
