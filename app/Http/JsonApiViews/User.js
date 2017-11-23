const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class User extends JsonApiView {
  get attributes() {
    return ['username'];
  }
  deal() {
    return this.belongsTo('App/Http/JsonApiViews/deal', {
      included: true,
      excludeRelation: 'user',
    });
  }
}

module.exports = User;
